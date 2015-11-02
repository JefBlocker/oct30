import Backbone from 'backbone';
import {APP_URL} from '../parse_data';
// import {md5} from 'blueimp-md5';

export default Backbone.Model.extend({

  urlRoot: APP_URL,

  idAttribute: 'objectId',
  },

  templateData() {
    return data;
  }

});