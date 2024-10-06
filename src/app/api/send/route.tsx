// Import Resend
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Handle POST requests
export async function POST(req: Request) {
  try {
    // Parse the incoming JSON body
    const { email, subject, message }: { email: string; subject: string; message: string; } = await req.json();

    // Send the email
    const {error } = await resend.emails.send({
      from: 'Muhammad Moeed <m.moeedq497@gmail.com>', // Your email
      to: [`${email}`], // Send to the email from the request
      subject: subject || 'Hello world', // Use subject from the request
      html: `<p>${message}</p>`, // Set the email body as HTML
    });

    // Check for errors
    if (error) {
      return new Response(JSON.stringify({ error: error.message || "Failed to send email." }), { status: 500 });
    }

    // Return success response
    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    // Handle any unexpected errors
    return new Response(JSON.stringify({ error: (error as Error).message || "An unexpected error occurred." }), { status: 500 });
  }
}
