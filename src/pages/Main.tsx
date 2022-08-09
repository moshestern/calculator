import { MainHeader, type TabName } from "../components/MainHeader";
import { TabPanel, useTabs } from "react-headless-tabs";
import { Calculator } from "../components/Calculator";
import { History } from "../components/History";
import { KeysProvider } from "../providers/KeysProvider";

export const Main = () => {
    const [selectedTab, setSelectedTab] = useTabs(["Calculator", "History"]);

    const handleSelectedTab = (selectedTab: TabName) => {
        setSelectedTab(selectedTab);
    }

    return (
        <>
            <MainHeader onSelectTab={handleSelectedTab} />
            <KeysProvider>
                <main>
                    <TabPanel hidden={selectedTab !== "Calculator"}>
                        <Calculator />
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== "History"}><History /></TabPanel>
                </main>
            </KeysProvider>
        </>
    )
};
