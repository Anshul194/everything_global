import "./App.css";
import "./styles/custom.css";
import Home from "./app/home/Home";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./app/about/About";
import Contact from "./app/contact/Contact";
import Portfolio from "./app/portfolio/Portfolio";
import Faq from "./app/faq/Faq";
import NotFound from "./app/not-found/NotFound";
import Post from "./app/blog/post/Post";
import Blog from "./app/blog/Blog";
import PortfolioSlug from "./app/portfolio/portfolio-slug/PortfolioSlug";
import OurClient from "./app/our-client/OurClient";
import Career from "./app/career/Career";
import OurTeam from "./app/our-team/OurTeam";
import PrivacyPolicy from "./app/privacy-policy/PrivacyPolicy";
import TermsOfUse from "./app/terms-of-use/TermsOfUse";
import ScrollToTop from "./component/common/ScrollToTop";
import { Provider } from "react-redux";
import appStore from "./utils/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import News from "./app/news/News";
import Services from "./app/services/Services";
import BrandingService from "./app/services/services-slug/branding/BrandingService";
import GraphicDesignService from "./app/services/services-slug/graphicdesign/GraphicDesignService";
import Branding3D from "./app/services/services-slug/3dbranding/Branding3D";
import ProductPhotography from "./app/services/services-slug/productphotography/ProductPhotography";
import Modeling from "./app/services/services-slug/modeling/Modeling";
import VideoEditing from "./app/services/services-slug/videoediting/VideoEditing";
import MotionGraphics from "./app/services/services-slug/motiongraphics/MotionGraphics";
import SocialMediaManagement from "./app/services/services-slug/socialmediamanagement/SocialMediaManagement";
import InfluencerMarketing from "./app/services/services-slug/influencermarketing/InfluencerMarketing";
import EcommerceMarketing from "./app/services/services-slug/ecommercemarketing/EcommerceMarketing";
import FacebookAds from "./app/services/services-slug/facebookads/FacebookAds";
import PPCAdvertising from "./app/services/services-slug/ppcadvertising/PPCAdvertising";
import YouTubeMarketing from "./app/services/services-slug/youtubemarketing/YouTubeMarketing";
import EmailMarketing from "./app/services/services-slug/emailmarketing/EmailMarketing";

import Uiux from "./app/services/services-slug/uiuxdesign/UiUxDesign";
import Webdesign from "./app/services/services-slug/websitedesign/WebsiteDesign";
import Customweb from "./app/services/services-slug/customwebapp/CustomWebApp";
import Saasdevelopment from "./app/services/services-slug/saasdevelopment/SaasDevelopment";
import SeoServices from "./app/services/services-slug/seoservices/SeoServices";
import AiSolution from "./app/services/services-slug/aisolution/AiSolution";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
      <ToastContainer />
        <Header />
        <ScrollToTop />
        <Routes>
        <Route path="/web-design" element={<Services />} />
        <Route  
            path="/web-design/uiux-design"
            element={<Uiux />}
        />
        <Route  
            path="/web-design/website-design"
            element={<Webdesign />}
        />
        <Route  
            path="/web-design/web-application"
            element={<Customweb />}
        />
        <Route  
            path="/web-design/saas-development"
            element={<Saasdevelopment />}
        />
        <Route  
            path="/web-design/seo-services"
            element={<SeoServices/>}
        />
        <Route  
            path="/web-design/ai-solution"
            element={<AiSolution/>}
        />
        <Route path="/growth-advertising" element={<Services />} />
          <Route path="/creative-marketing" element={<Services />} />
          <Route  
            path="/creative-marketing/branding"
            element={<BrandingService />}
          />
          <Route
            path="/creative-marketing/GraphicDesignService"
            element={<GraphicDesignService />}
          />
          <Route
            path="/creative-marketing/3d-branding"
            element={<Branding3D />}
          />
          <Route
            path="/creative-marketing/product-photography"
            element={<ProductPhotography />}
          />
          <Route path="/creative-marketing/modeling" element={<Modeling />} />
          <Route
            path="/creative-marketing/video-editing"
            element={<VideoEditing />}
          />
          <Route
            path="/creative-marketing/motion-graphics"
            element={<MotionGraphics />}
          />
          <Route
            path="/creative-marketing/social-media-management"
            element={<SocialMediaManagement />}
          />
          <Route
            path="/growth-advertising/influencer-marketing"
            element={<InfluencerMarketing />}
          />
          <Route
            path="/growth-advertising/ecommerce-marketing"
            element={<EcommerceMarketing />}
          />
          <Route
            path="/growth-advertising/facebook-ads"
            element={<FacebookAds />}
          />
          <Route path="/growth-advertising/ppc" element={<PPCAdvertising />} />
          <Route
            path="/growth-advertising/youtube-marketing"
            element={<YouTubeMarketing />}
          />
          <Route
            path="/growth-advertising/email-marketing"
            element={<EmailMarketing />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-slug/:id" element={<PortfolioSlug />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/career" element={<Career />} />
          <Route path="/our-client" element={<OurClient />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/news/:id" element={<News/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
