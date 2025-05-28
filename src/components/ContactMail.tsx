import * as React from 'react';

interface ContactEmailProps {
  name?: string;      // optional
  phone?: string;     // optional
  email: string;
  message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  phone,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.5, color: '#333' }}>
    <h2 style={{ color: '#d32f2f' }}>📨 New Contact Message</h2>
    {name && <p><strong>Name:</strong> {name}</p>}
    {phone && <p><strong>Phone:</strong> {phone}</p>}
    <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
    <p><strong>Message:</strong></p>
    <div style={{ background: '#f4f4f4', padding: '12px', borderRadius: '6px' }}>
      {message.split('\n').map((line, i) => (
        <p key={i} style={{ margin: 0 }}>{line}</p>
      ))}
    </div>
    <hr style={{ marginTop: '20px', borderColor: '#ddd' }} />
    <p style={{ fontSize: '12px', color: '#888' }}>
      Sent from the HatsMaster contact form.
    </p>
  </div>
);
