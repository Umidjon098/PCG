import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourselData from "./components/register/course-data";
import Waiting from "./components/waiting-page/waiting";
import Sidebar from "./components/sidebar/sidebar";
import MainPage from "./components/main-page/main-page";
import AddBusiness from "./components/add-business/add-business";
import Search from "./components/search/search";
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
            <Route exact path="/waiting" component={Waiting} />
            <Route exact path="/mainpage">
              <MainPage
                getCallBackNewsID={this.getCallBackNewsID}
                getCallBacDiscountID={this.getCallBacDiscountID}
              />
            </Route>
            <Route exact path="/addbusiness" component={AddBusiness} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/success" component={Success} />
            <Route path="/businessadd" component={BusinessAdd} />
            <Route path="/news-detail">
              <NewsDetail id={this.state.id} />
            </Route>
            <Route path="/discount-detail">
              <DiscountDetail id={this.state.favoriteDiscount} />
            </Route>
            <Route exact path="/shopping">
              <ShoppingMain getCallBackList={this.getCallBackList} />
            </Route>
            <Route exact path="/edit" component={EditData} />
            <Route exact path="/businessedit" component={BusinessEdit} />
            <Route path="/bookdetail">
              <BookDetail
                data={this.state.List}
                getCallBackList={this.getCallBackList}
              />
            </Route>
            <Route path="/videodetail">
              <VideoDetail
                data={this.state.List}
                getCallBackList={this.getCallBackList}
              />
            </Route>
            <Route path="/buyproduct">
              <BuyProduct />
            </Route>
            <Route exact path="/library" component={Library} />
            <Route exact path="/balance" component={BalanceOfQuantity} />
            <Route exact path="/conversion" component={Conversion} />
            <Route exact path="/balance_cart" component={Balance} />
            <Route exact path="/club_gold" component={ClubGold} />
          </Switch>
        </Router>
      );
    }
  }
}

export default App;
