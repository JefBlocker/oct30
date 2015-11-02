import Backbone from 'backbone';
import Detail from './detail';
import {APP_URL} from '../parse_data';

export default Backbone.Collection.extend({

  url: APP_URL,

  model: Detail,

  // parse: function(data) {
  //   return data.results;
  // },

  parse(data) {
    return data.results;
  }
 
});