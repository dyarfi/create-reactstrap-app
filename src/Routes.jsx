import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

return <Suspense fallback={<div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3"><div className="w-50 mx-auto">Please wait while we load the live preview examples</div></div>}>
        <Switch>
            <Redirect exact from="/" to="/LandingPage" />
            <Route path={[  "/LandingPage",  ]}>
                <PresentationLayout>
                <Switch location={location} key={location.pathname}>
                    
                    <Route path="/LandingPage" component={ LandingPage } />
                </Switch>
                </PresentationLayout>
            </Route>
            <Route path={[  "/DashboardDefault",  "/Buttons",  "/Dropdowns",  "/NavigationMenus",  "/ProgressBars",  "/Pagination",  "/Scrollable",  "/Badges",  "/Icons",  "/UtilitiesHelpers",  "/Cards3",  "/ListGroups",  "/Accordions",  "/Modals",  "/Notifications",  "/Carousels",  "/Popovers",  "/Tooltips",  "/Tabs",  "/RegularTables1",  "/RegularTables4",  "/FormsLayout",  "/FormsControls",  "/ApexCharts",  "/Maps",  ]}>
                <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                    <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                    >
                    <Route path="/DashboardDefault" component={ DashboardDefault } />
                    <Route path="/Buttons" component={ Buttons } />
                    <Route path="/Dropdowns" component={ Dropdowns } />
                    <Route path="/NavigationMenus" component={ NavigationMenus } />
                    <Route path="/ProgressBars" component={ ProgressBars } />
                    <Route path="/Pagination" component={ Pagination } />
                    <Route path="/Scrollable" component={ Scrollable } />
                    <Route path="/Badges" component={ Badges } />
                    <Route path="/Icons" component={ Icons } />
                    <Route path="/UtilitiesHelpers" component={ UtilitiesHelpers } />
                    <Route path="/Cards3" component={ Cards3 } />
                    <Route path="/ListGroups" component={ ListGroups } />
                    <Route path="/Accordions" component={ Accordions } />
                    <Route path="/Modals" component={ Modals } />
                    <Route path="/Notifications" component={ Notifications } />
                    <Route path="/Carousels" component={ Carousels } />
                    <Route path="/Popovers" component={ Popovers } />
                    <Route path="/Tooltips" component={ Tooltips } />
                    <Route path="/Tabs" component={ Tabs } />
                    <Route path="/RegularTables1" component={ RegularTables1 } />
                    <Route path="/RegularTables4" component={ RegularTables4 } />
                    <Route path="/FormsLayout" component={ FormsLayout } />
                    <Route path="/FormsControls" component={ FormsControls } />
                    <Route path="/ApexCharts" component={ ApexCharts } />
                    <Route path="/Maps" component={ Maps } />
                    </motion.div>
                </Switch>
                </LeftSidebar>
            </Route>

        </Switch>
    </Suspense>