import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";

const Contact = () => {
	const pageTransition = {
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0,
			x: 300,
		},
	};

	const transition = {
		ease: [0.03, 0.87, 0.73, 0.9],
		duration: 0.6,
	};

	return (
		<main>
			<Mouse />
			<motion.div
				className="contact"
				exit="out"
				animate="in"
				initial="out"
				variants={pageTransition}
				transition={transition}
			>
				<Navigation />
				<Logo />
				<ContactForm />
				<div className="contact-infos">
					<div className="address">
						<div className="content">
							<h4>adresse</h4>
							<p>15 av des martyrs</p>
							<p>de la libération</p>
							<p>33700 Mérignac</p>
						</div>
					</div>
					<div className="phone">
						<div className="content">
							<h4>téléphone</h4>
							<CopyToClipboard text="0624481234" className="hover">
								<p
									style={{ cursor: "pointer" }}
									className="clipboard"
									onClick={() => {
										alert("Téléphone copié !");
									}}
								>
									06 24 48 12 34
								</p>
							</CopyToClipboard>
						</div>
					</div>
					<div className="email">
						<div className="content">
							<h4>email</h4>
							<CopyToClipboard text="altgaetan@hotmail.com" className="hover">
								<p
									style={{ cursor: "pointer" }}
									className="clipboard"
									onClick={() => {
										alert("Email copié !");
									}}
								>
									altgaetan@hotmail.com
								</p>
							</CopyToClipboard>
						</div>
					</div>
					<SocialNetwork />
					<div className="credits">
						<p>fromGA - 2021</p>
					</div>
				</div>
				<ButtonsBottom left={"/project-4"} />
			</motion.div>
		</main>
	);
};

export default Contact;
