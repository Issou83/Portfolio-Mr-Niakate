import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import emailjs from '@emailjs/browser';
import ContactForm from './ContactForm';
jest.mock('@emailjs/browser', () => ({ sendForm: jest.fn() }));
const originalKey = process.env.REACT_APP_ID;
afterEach(() => { jest.resetAllMocks(); if (originalKey === undefined) delete process.env.REACT_APP_ID; else process.env.REACT_APP_ID = originalKey; });
test('prevents duplicate requests while sending and announces success', async () => {
 process.env.REACT_APP_ID = 'test-public-key';
 let complete;
 emailjs.sendForm.mockReturnValue(new Promise(resolve => { complete = resolve; }));
 const { container } = render(<ContactForm />);
 fireEvent.submit(container.querySelector('form'));
 fireEvent.submit(container.querySelector('form'));
 expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
 expect(screen.getByRole('button').disabled).toBe(true);
 await act(async () => complete({ status: 200 }));
 expect(screen.getByRole('status').textContent).toContain('Message envoyé');
 expect(screen.getByRole('button').disabled).toBe(false);
});
test('offers a direct contact option after a transport failure', async () => {
 process.env.REACT_APP_ID = 'test-public-key';
 emailjs.sendForm.mockRejectedValue(new Error('network unavailable'));
 const { container } = render(<ContactForm />);
 await act(async () => fireEvent.submit(container.querySelector('form')));
 expect(screen.getByRole('status').textContent).toContain("n'a pas pu être envoyé");
 expect(screen.getByRole('link',{name:'06 79 81 35 35'}).getAttribute('href')).toBe('tel:+33679813535');
});
test('does not send or claim success when the public EmailJS key is missing', () => {
 delete process.env.REACT_APP_ID;
 const { container } = render(<ContactForm />);
 fireEvent.submit(container.querySelector('form'));
 expect(emailjs.sendForm).not.toHaveBeenCalled();
 expect(screen.getByRole('status').textContent).toContain("n'a pas pu être envoyé");
});
