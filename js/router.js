import Backbone from 'backbone';
import $ from 'jquery';

import {
  Database as DatabaseCollection
} from './resources';

import {
  Database as DatabaseView, 
  Detail as DetailView,
  Add as AddView,
  Edit as EditView, 
  Spinner
} from './views';

export default Backbone.Router.extend({

  routes: {
    ""              : "redirectToDatabase",
    "database"      : "showDatabase",
    "detail/:id"    : "showDetail",
    "add"           : "showAdd", 
    "edit"          : "showEdit",
  },

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new DatabaseCollection();

    this.$el.on('click', '.detail-list-item', (event) => {
      let $li = $(event.currentTarget);
      let detailId = $li.data('detail-id');
      this.navigate(`detail/${detailId}`, {trigger: true});
    });

    this.$el.on('click', '.back-button', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });
  },

  start() {
    Backbone.history.start();
    return this;
  },

  showSpinner() {
    this.$el.html( Spinner() );
  },

  redirectToDatabase() {
    this.navigate('database', {
      replace: true,
      trigger: true
    });
  },

  showDatabase() {
    this.showSpinner();

    // this.collection.fetch().then(function() {
    //   this is equivalent to below
    //   only below has `this` auto bound
    //   // `this` would be either null or window
    // });
    this.collection.fetch().then(() => {
      // `this` === the router instance

      this.$el.html(
        DatabaseView(
          this.collection.toJSON()
        )
      );
    });
  },

  showDetail(id) {
    let detail = this.collection.get(id);

    if (detail) {
      // we found the individual record from the collection
      this.$el.html(
        DetailView(
          detail.templateData()
        )
      );
    } else {
      this.showSpinner();
      detail = this.collection.add({objectId: id});
      detail.fetch().then(() => {
        this.$el.html(
          DetailView(
            detail.templateData()
          )
        );
      });
    }
  }


});