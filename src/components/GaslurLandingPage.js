import styles from "./GaslurLandingPage.module.css";
import {React, useState} from "react";

const GaslurLandingPage = () => {
  const handleFastechClick = () => {
    window.location.reload();
  };

  const [activeSection, setActiveSection] = useState("home");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.gaslurLandingPage}>
      <div className={styles.gaslurLandingPageChild} />
      <div className={styles.gaslurLandingPageItem} />
      <div className={styles.gaslurLandingPageInner} />
      <div className={styles.discoverCollectAnd}>
        Discover, collect, and charity in extraordinary NFT marketplace
      </div>
      <div className={styles.inAeneanPosuere}>
        In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus
        vestibulum nibh mi venenatis
      </div>
      <div className={styles.exploreWrapper}>
        <div className={styles.explore} style={{cursor: "pointer"}}>Explore</div>
      </div>
      <div className={styles.createWrapper}>
        <div className={styles.explore} style={{cursor: "pointer"}}>Create</div>
      </div>
      <div className={styles.signInParent}>
        <div className={styles.signIn} style={{cursor: "pointer"}}>SignIn</div>
        <div className={styles.createParent}>
          <div className={styles.create1} style={{cursor: "pointer"}}>create</div>
          <div className={styles.groupChild} />
        </div>
      </div>
      <img className={styles.heart24Icon} alt="" src="/heart24.svg" />
      <div className={styles.laura}>Laura</div>
      <div className={styles.weAreHere}>WE ARE HERE</div>
      <div className={styles.weth}>0.21 Weth</div>
      <img className={styles.groupIcon} alt="" src="/group 1248.png" style={{cursor: "pointer"}} />
      <div className={styles.div}>25</div>
      <div className={styles.homeParent}>
        <b className={styles.home}  style={{cursor: "pointer"}} onClick={handleFastechClick}>Home</b>
        <div className={styles.myProfile}  style={{cursor: "pointer"}}>My profile</div>
        <div className={styles.activity}  style={{cursor: "pointer"}}>activity</div>
        <div className={styles.howItWorks}  style={{cursor: "pointer"}}>how it works</div>
        <div className={styles.groupItem} />
      </div>
      <img
        className={styles.unsplashog44d93injkIcon}
        alt=""
        src="/dash.png "
      />
      <b className={styles.fastech}  style={{cursor: "pointer"}} onClick={handleFastechClick}>FasTech</b>
    </div>
  );
};

export default GaslurLandingPage;
