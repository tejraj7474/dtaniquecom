import { Resend } from "resend";


const resend = new Resend(
  process.env.RESEND_API_KEY
);


export async function POST({ request }: any) {

  try {

    const {
      name,
      email,
      phone,
      message
    } = await request.json();


    await resend.emails.send({

      from: "onboarding@resend.dev",

      to: [
        "marketing.dtaniqueblr@gmail.com",
        "testmaildigitalnock@gmail.com"
      ],

      subject: "New DtaniQue Website Enquiry",

      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Message:</strong> ${message}</p>
      `

    });


    return Response.json({

      status: "success",

      message: "Mail Sent Successfully"

    });


  } catch (error:any) {


    console.log(error);


    return Response.json({

      status:"error",

      message:error.message

    },
    {
      status:500
    });


  }

}