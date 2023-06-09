import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Doctor from "../Pages/Doctor";
import Blog from "../Pages/Blog";
import News from "../Pages/News";
import Home from "../Pages/Home";
import OurDoctors from "../Pages/OurDoctors";
import Service from "../Pages/Service";
import Category from "../Pages/Category";
import Excursion from "../Pages/Excursion";
import Contact from "../Pages/Contact";
import NewsArticle from "../Pages/NewsArticle";
import Prices from "../Pages/Prices";
import BlogArticle from "../Pages/BlogArticle";
import AboutUs from "../Pages/AboutUs";
import ForPatients from "../Pages/ForPatients";
import PrivacyPolicy from "../Pages/PrivacyPolicyPage";
import TermsOfUse from "../Pages/TermsOfUse";
export default function Main() {
	const { pathname, hash, key } = useLocation();
	useEffect(() => {
		// if not a hash link, scroll to top
		if (hash === "") {
			window.scrollTo(0, 0);
		}
		// else scroll to id
		else {
			setTimeout(() => {
				const id = hash.replace("#", "");
				const element = document.getElementById(id);
				if (element) {
					element.scrollIntoView({ block: "start" });
				}
			}, 0);
		}
	}, [pathname, hash, key]); // do this on route change

	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/doctor/:doctorName" element={<Doctor />} />
			<Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
			<Route exact path="/terms-of-use" element={<TermsOfUse />} />
			<Route exact path="/our-doctors" element={<OurDoctors />} />
			<Route exact path="/service/:serviceName" element={<Service />} />
			<Route exact path="/category/:categoryName" element={<Category />} />
			<Route exact path="/Prices" element={<Prices />} />
			<Route exact path="/for-patients" element={<ForPatients />} />
			<Route exact path="/Excursion" element={<Excursion />} />
			<Route exact path="/Contact" element={<Contact />} />
			<Route exact path="/about-us" element={<AboutUs />} />
			<Route exact path="/blog" element={<Blog />} />
			<Route exact path="/blog/:articleTitle" element={<BlogArticle />} />
			<Route exact path="/news" element={<News />} />
			<Route exact path="/news/:articleTitle" element={<NewsArticle />} />
		</Routes>
	);
}
