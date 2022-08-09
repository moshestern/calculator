import { useTabs } from "react-headless-tabs";
import { Tab } from "./Tab";
import './MainHeader.scss';
import { UserPanel } from "./UserPanel";

export type TabName = "Calculator" | "History";
type HeaderProps = {
    onSelectTab: (tabName:TabName) => void
}

export const MainHeader = (props:HeaderProps) => {

    const [selectedTab, setSelectedTab] = useTabs(["Calculator", "History"]);

    const selectTabHandle = (tabName: TabName) => {
        setSelectedTab(tabName);
        props.onSelectTab(tabName)
    }


    return (
        <header>
            <nav>
                <Tab
                    isActive={selectedTab === "Calculator"}
                    onClick={() => selectTabHandle("Calculator")}
                >
                    Calculator
                </Tab>
                <Tab
                    isActive={selectedTab === "History"}
                    onClick={() => selectTabHandle("History")}
                >
                    History
                </Tab>
            </nav>
            <UserPanel />
        </header>
    )
}