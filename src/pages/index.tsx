// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Home() {
	return (
		<>
			<link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
			<div className="h-full pb-0 "></div>
			<script src="../../node_modules/flowbite/dist/flowbite.js"></script>
		</>
	)
}

// export async function getStaticProps({ locale }) {
// 	return { props: { ...(await serverSideTranslations(locale, ['layout'])) } };
// }
export default Home;
