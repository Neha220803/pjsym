const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
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
        user: "pjsympatna@gmail.com",
        pass: "xsse cgda oafx uqeb",
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
        to: "pjsympatna@gmail.com",
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