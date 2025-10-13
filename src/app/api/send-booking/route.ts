import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, date, pickup, dropoff, notes } = body;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['tameralaeddin@gmail.com'],
      subject: `New Ride Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <h2 style="color: #539766; border-bottom: 3px solid #539766; padding-bottom: 10px;">New Ride Request</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #333; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            
            <h3 style="color: #333; margin-top: 30px;">Ride Details</h3>
            <p><strong>Service Type:</strong> ${service}</p>
            <p><strong>Preferred Date:</strong> ${date}</p>
            <p><strong>Pickup Address:</strong> ${pickup}</p>
            <p><strong>Dropoff Address:</strong> ${dropoff}</p>
            
            ${notes ? `
              <h3 style="color: #333; margin-top: 30px;">Additional Notes</h3>
              <p style="background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #539766;">${notes}</p>
            ` : ''}
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f2ea; border-radius: 8px;">
            <p style="margin: 0; color: #539766; font-weight: bold;">⏰ Please respond to this request as soon as possible!</p>
            <p style="margin-top: 10px; color: #666; font-size: 14px;">Reply directly to: ${email} or call: ${phone}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
