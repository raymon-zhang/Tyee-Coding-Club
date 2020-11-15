import React, { Component, createRef } from "react";

import { CSSTransition } from "react-transition-group";

import "../index.css";

class TransitionGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: props.activeMenu === props.groupName,
        };
        this.nodeRef = createRef();
        this.calcHeight = this.calcHeight.bind(this);
    }

    calcHeight() {
        const height = this.nodeRef.current.offsetHeight;
        this.props.setMenuHeight(height);
    }

    componentDidUpdate(prevProps) {
        if (this.props.activeMenu !== prevProps.activeMenu) {
            this.setState({
                isActive: this.props.activeMenu === this.props.groupName,
            });
        }
    }

    render() {
        return (
            <CSSTransition
                in={this.state.isActive}
                timeout={500}
                classNames={this.props.className}
                unmountOnExit
                onEnter={this.calcHeight}
                nodeRef={this.nodeRef}
            >
                <div className="menu" ref={this.nodeRef}>
                    {this.props.children}
                </div>
            </CSSTransition>
        );
    }
}

function DropdownItem(props) {
    return (
        <button
            className="menu-item"
            onClick={() => {
                if (props.click) {
                    props.click();
                } else {
                    props.goToMenu && props.setActiveMenu(props.goToMenu);
                }
            }}
        >
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
        </button>
    );
}

export class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenu: "main",
            menuHeight: null,
        };
        this.dropdownRef = createRef();
        this.setMenuHeight = this.setMenuHeight.bind(this);
        this.setActiveMenu = this.setActiveMenu.bind(this);
    }

    componentDidMount() {
        this.setState({
            menuHeight: this.dropdownRef.current?.firstChild.offsetHeight,
        });
    }

    setMenuHeight(height) {
        this.setState({
            menuHeight: height,
        });
    }

    setActiveMenu(menu) {
        this.setState({
            activeMenu: menu,
        });
    }

    render() {
        const menus = React.Children.map(this.props.children, (child) => {
            const isPrimary = child.props.primary;
            const menuName = child.props.name;
            const items = React.Children.map(child.props.children, (item) => {
                return (
                    <DropdownItem
                        leftIcon={item.props.leftIcon}
                        rightIcon={item.props.rightIcon}
                        goToMenu={item.props.goToMenu}
                        setActiveMenu={this.setActiveMenu}
                        click={item.props.click}
                    >
                        {item.props.children}
                    </DropdownItem>
                );
            });

            return (
                <TransitionGroup
                    groupName={menuName}
                    className={isPrimary ? "menu-primary" : "menu-secondary"}
                    activeMenu={this.state.activeMenu}
                    setMenuHeight={this.setMenuHeight}
                >
                    {items}
                </TransitionGroup>
            );
        });
        return (
            <div
                className="dropdown"
                style={{ height: this.state.menuHeight }}
                ref={this.dropdownRef}
            >
                {/* <TransitionGroup
                    activeMenu={this.state.activeMenu}
                    groupName="main"
                    className="menu-primary"
                    setMenuHeight={this.setMenuHeight}
                >
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings"
                        setActiveMenu={this.setActiveMenu}
                    >
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals"
                        setActiveMenu={this.setActiveMenu}
                    >
                        Animals
                    </DropdownItem>
                </TransitionGroup>

                <TransitionGroup
                    activeMenu={this.state.activeMenu}
                    groupName="settings"
                    className="menu-secondary"
                    setMenuHeight={this.setMenuHeight}
                >
                    <DropdownItem
                        goToMenu="main"
                        leftIcon={<ArrowIcon />}
                        setActiveMenu={this.setActiveMenu}
                    >
                        <h4>My Tutorial</h4>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<BoltIcon />}
                        setActiveMenu={this.setActiveMenu}
                    >
                        HTML
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<BoltIcon />}
                        setActiveMenu={this.setActiveMenu}
                    >
                        CSS
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<BoltIcon />}
                        setActiveMenu={this.setActiveMenu}
                    >
                        JavaScript
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<BoltIcon />}
                        setActiveMenu={this.setActiveMenu}
                    >
                        Awesome!
                    </DropdownItem>
                </TransitionGroup>

                <TransitionGroup
                    activeMenu={this.state.activeMenu}
                    groupName="animals"
                    className="menu-secondary"
                    setMenuHeight={this.setMenuHeight}
                >
                    <DropdownItem
                        goToMenu="main"
                        leftIcon={<ArrowIcon />}
                        setActiveMenu={this.setActiveMenu}
                    >
                        <h4>Animals</h4>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦘"
                        setActiveMenu={this.setActiveMenu}
                    >
                        Kangaroo
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🐸"
                        setActiveMenu={this.setActiveMenu}
                    >
                        Frog
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦋"
                        setActiveMenu={this.setActiveMenu}
                    >
                        Horse?
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦔"
                        setActiveMenu={this.setActiveMenu}
                    >
                        Hedgehog
                    </DropdownItem>
                </TransitionGroup> */}
                {menus}
            </div>
        );
    }
}
