import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Wrapper from "../../../hoc/Wrapper/Wrapper";

const sideDrawer = (props) => {
	let attachedStyles = [styles.SideDrawer, styles.Close];
	if (props.open) {
		attachedStyles = [styles.SideDrawer, styles.Open];
	}
	return (
		<Wrapper>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedStyles.join(" ")} onClick={props.closed}>
				<div className={styles.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems isAuthenticated={props.isAuth} />
				</nav>
			</div>
		</Wrapper>
	);
};

export default sideDrawer;