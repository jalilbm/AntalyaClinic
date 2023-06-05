import "./index.css";
import SideImagSection from "../../Components/SideImageSection";
import { Container } from "react-bootstrap";
import { Button } from "antd";
import { Rate } from "antd";
import Footer from "../../Layouts/Footer";
import NewsLetter from "../../Components/NewsLetter";

export default function BlogArticle() {
	return (
		<div className="blog-article">
			<Container>
				<div className="blog-title-container">
					<h1 className="blog-title mb-4">БЛОГ</h1>
				</div>
			</Container>
			<SideImagSection />
			<Container>
				<div className="blog-article-text mt-5">
					<p>
						Все мы хотим идеальное тело и вечно молодое лицо, но постоянный
						стресс, бесконечная работа, городской ритм и плохая экология берут
						свое. Все мы хотим идеальное тело и вечно молодое лицо, но
						постоянный стресс, бесконечная работа, городской ритм и плохая
						экология берут свое. Все мы хотим идеальное тело и вечно молодое
						лицо, но постоянный стресс, бесконечная работа, городской ритм и
						плохая экология берут свое. Все мы хотим идеальное тело и вечно
						молодое лицо, но постоянный стресс, бесконечная работа, городской
						ритм и плохая экология берут свое. Все мы хотим идеальное тело и
						вечно молодое лицо, но постоянный стресс, бесконечная работа,
					</p>
					<p>
						городской ритм и плохая экология берут свое. Все мы хотим идеальное
						тело и вечно молодое лицо, но постоянный стресс, бесконечная работа,
						городской ритм и плохая экология берут свое. Все мы хотим идеальное
						тело и вечно молодое лицо, но постоянный стресс, бесконечная работа,
						городской ритм и плохая экология берут свое. Все мы хотим идеальное
						тело и вечно молодое лицо, но постоянный стресс, бесконечная работа,
						городской ритм и плохая экология берут свое. Все мы хотим идеальное
						тело и вечно молодое лицо, но постоянный стресс, бесконечная работа,
						городской ритм и плохая экология берут свое. Все мы хотим идеальное
						тело и вечно молодое лицо, но постоянный стресс, бесконечная работа,
						городской ритм и плохая экология берут свое. Все мы хотим идеальное
						тело и вечно молодое лицо, но постоянный стресс, бесконечная работа,
						городской ритм и плохая экология берут свое. Все мы хотим идеальное
						тело и вечно молодое лицо, но постоянный стресс, бесконечная работа,
						городской ритм и плохая экология берут свое. Все мы хотим идеальное
						тело и вечно молодое лицо, но постоянный стресс, бесконечная работа,
					</p>
					<p>
						городской ритм и плохая экология берут свое. Все мы хотим идеальное
						тело и вечно молодое лицо, но постоянный стресс, бесконечная работа,
						городской ритм и плохая экология берут свое. Все мы хотим идеальное
						тело и вечно молодое лицо, но постоянный стресс, бесконечная работа,
						городской ритм и плохая экология берут свое. Все мы хотим идеальное
						тело и вечно молодое лицо, но постоянный стресс, бесконечная работа,
						городской ритм и плохая экология берут свое. Все мы хотим идеальное
						тело и вечно молодое лицо, но постоянный стресс, бесконечная работа,
						городской ритм и плохая экология берут свое. Все мы хотим идеальное
						тело и вечно молодое лицо, но постоянный стресс, бесконечная работа,
						городской ритм и плохая экология берут свое.
					</p>
				</div>
				<div className="stars-section-blog my-5">
					<p
						className="mb-0 me-4"
						style={{ color: "#323334", fontWeight: "bold", fontSize: "1.2rem" }}
					>
						НАСКОЛЬКО ВАМ БЫЛА ПОЛЕЗНА СТАТЬЯ?
					</p>
					<Rate allowClear={false} defaultValue={1} />
					<span className="ant-rate-text "></span>
				</div>
				<div className="center-div m-5">
					<Button
						className="blog-articles-button center-div p-4 "
						// onClick={() => setShowAllDoctors(true)}
					>
						ВСЕ СТАТЬИ
					</Button>
				</div>
			</Container>
			<NewsLetter />
			<Footer />
		</div>
	);
}
