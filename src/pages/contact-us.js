import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
    return (
      <InnerPageContainer title="Contact Us">
            <PageMetaTags title="Contact Us" description={"We are reachable at - contact@d.com"} url="/contact-us"/>
            <p className="mt-12">
            We are reachable at <a href="https://discord.gg/EPM4rqpmcf">https://discord.gg/EPM4rqpmcf</a>
            </p>
            
      </InnerPageContainer>
    )
  }
  