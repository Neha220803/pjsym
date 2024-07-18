const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "pjsym1975@gmail.com",
        pass: "rvtp uwey zmsg aqlr",
        // pass: "nkmjuspcfkdkpjej"
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    const phone = req.body.phoneNumber;
    const email = req.body.email;
    const mail = {
        from: email,
        to: "pjsym1975@gmail.com",
        subject: "Contact Form Submission - Pjsym",
        html: `<p>Name: ${name}</p>
           <p>Phone: ${phone}</p>
           <p>email: ${email}</p>
           <p>Message: ${message}</p>
           `,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});
router.post("/donate", (req, res) => {
    const name = req.body.name;
    const street = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const mail = {
        from: email,
        to: "pjsym1975@gmail.com",
        subject: "Donate Form Submission - PJSYM",
        html: `<p>Name: ${name}</p>
           <p>Phone: ${phone}</p>
           <p>email: ${email}</p>
           <p>Street: ${street}</p>
           <p>City: ${city}</p>
           <p>State: ${state}</p>
           <p>Country: ${country}</p>
           `,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            console.log('Donate message sent successfully');
            res.status(200).json({ success: true, message: 'Donate message sent successfully' });
        }
    });
});
