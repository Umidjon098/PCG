import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourselData from "./components/register/course-data";
import Waiting from "./components/waiting-page/waiting";
import Sidebar from "./components/sidebar/sidebar";
import MainPage from "./components/main-page/main-page";
import AddBusiness from "./components/add-business/add-business";
import Login from "./components/login/login";
import PreLoader from "./components/preloader/preloader";
import Profile from "./components/profile/profile";
import Registration from "./components/register/registration";
import Success from "./components/successful/success";
import NewsDetail from "./components/main-page/news-detail";
import BusinessAdd from "./components/add-business/addBusiness";
import DiscountDetail from "./components/main-page/discount-detail";
import ShoppingMain from "./components/shopping_main/shopping_main";
import EditData from "./components/edit/edit";
import BusinessEdit from "./components/edit/business-edit";
import BookDetail from "./components/shopping_main/book-detail";
import VideoDetail from "./components/shopping_main/video-detail";
import BuyProduct from "./components/buy-product/buy-product";
import Library from "./components/library/library";
import BalanceOfQuantity from "./components/balance_of_quantity/balance_of_quantity";
import Conversion from "./components/balance_of_quantity/conversion";
import Balance from "./components/balance_of_quantity/balance";
import ClubGold from "./components/balance_of_quantity/club-gold";
import Auth from "./components/Auth";
import PageNotFound from "./components/404/404page";
import BusinessMarket from "./components/business-market/main";
import ReferalLink from "./components/referallink/referallink";
import MainSearch from "./components/search/main-search";
import BusinessDetail from "./components/add-business/business-detail";
import ProfileDetail from "./components/profile/user-profile-detail";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      id: "",
      List: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), 2000);
  }
  getCallBackNewsID = (id) => {
    this.setState({ id });
  };
  getCallBacDiscountID = (id) => {
    localStorage.setItem("discountDetail", id);
    this.setState({ favoriteDiscount: id });
  };
  getCallBackList = (List) => {
    this.setState({ List });
  };

  render() {
    if (this.state.loading === true) {
      return <PreLoader />;
    } else {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/sidebar" component={Sidebar} />
            <Route path="/register" component={Registration} />
            <Route exact path="/carousel" component={CourselData} />
            <Route
              exact
              path="/waiting"
              render={(props) => (
                <Auth>
                  <Waiting {...props} />
                </Auth>
              )}
            />
            <Route
              exact
              path="/mainpage"
              render={(props) => (
                <Auth>
                  <MainPage
                    {...props}
                    getCallBackNewsID={this.getCallBackNewsID}
                    getCallBacDiscountID={this.getCallBacDiscountID}
                  />
                </Auth>
              )}
            />
            <Route
              exact
              path="/addbusiness"
              render={(props) => (
                <Auth>
                  <AddBusiness {...props} />
                </Auth>
              )}
            />
            <Route
              exact
              path="/search"
              render={(props) => (
                <Auth>
                  <MainSearch {...props} />
                </Auth>
              )}
            />
            <Route
              exact
              path="/profile"
              render={(props) => (
                <Auth>
                  <Profile {...props} />
                </Auth>
              )}
            />
            <Route
              exact
              path="/users_detail"
              render={(props) => (
                <Auth>
                  <ProfileDetail {...props} />
                </Auth>
              )}
            />
            <Route
              path="/success"
              render={(props) => (
                <Auth>
                  <Success {...props} />
                </Auth>
              )}
            />
            <Route
              path="/businessadd"
              render={(props) => (
                <Auth>
                  <BusinessAdd {...props} />
                </Auth>
              )}
            />
            <Route
              path="/news-detail"
              render={(props) => (
                <Auth>
                  <NewsDetail id={this.state.id} {...props} />
                </Auth>
              )}
            />
            <Route
              path="/discount-detail"
              render={(props) => (
                <Auth>
                  <DiscountDetail id={this.state.favoriteDiscount} {...props} />
                </Auth>
              )}
            ></Route>
            <Route
              exact
              path="/shopping"
              render={(props) => (
                <Auth>
                  <ShoppingMain
                    getCallBackList={this.getCallBackList}
                    {...props}
                  />
                </Auth>
              )}
            />
            <Route
              exact
              path="/edit"
              render={(props) => (
                <Auth>
                  <EditData {...props} />
                </Auth>
              )}
            />
            <Route
              exact
              path="/businessedit"
              render={(props) => (
                <Auth>
                  <BusinessEdit {...props} />
                </Auth>
              )}
            />
            <Route
              path="/bookdetail"
              render={(props) => (
                <Auth>
                  <BookDetail
                    data={this.state.List}
                    getCallBackList={this.getCallBackList}
                    {...props}
                  />
                </Auth>
              )}
            />
            <Route
              path="/videodetail"
              render={(props) => (
                <Auth>
                  <VideoDetail
                    data={this.state.List}
                    getCallBackList={this.getCallBackList}
                    {...props}
                  />
                </Auth>
              )}
            />
            <Route
              path="/buyproduct"
              render={(props) => (
                <Auth>
                  <BuyProduct {...props} />
                </Auth>
              )}
            />

            <Route
              exact
              path="/library"
              render={(props) => (
                <Auth>
                  <Library {...props} />
                </Auth>
              )}
            />
            <Route
              exact
              path="/balance"
              render={(props) => (
                <Auth>
                  <BalanceOfQuantity {...props} />
                </Auth>
              )}
            />
            <Route
              exact
              path="/conversion"
              render={(props) => (
                <Auth>
                  <Conversion {...props} />
                </Auth>
              )}
            />
            <Route
              exact
              path="/balance_cart"
              render={(props) => (
                <Auth>
                  <Balance {...props} />
                </Auth>
              )}
            />
            <Route
              exact
              path="/club_gold"
              render={(props) => (
                <Auth>
                  <ClubGold {...props} />
                </Auth>
              )}
            />
            <Route
              exact
              path="/business_market"
              render={(props) => (
                <Auth>
                  <BusinessMarket {...props} />
                </Auth>
              )}
            />
            <Route exact path="/business_detail" component={BusinessDetail} />
            <Route
              exact
              path="/referal_link"
              render={(props) => (
                <Auth>
                  <ReferalLink {...props} />
                </Auth>
              )}
            />
            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </Router>
      );
    }
  }
}

export default App;
