import DS from 'ember-data';
import Validator from '../mixins/validator';

export default DS.Model.extend(Validator,{
  name: DS.attr('string'),
  secondName: DS.attr('string'),
  email: DS.attr('string'),
  bussinessEmail: DS.attr('string'),

  legacyCode: DS.attr('string'),
  mainstreamCode: DS.attr('string'),
  lotteryNumber: DS.attr('number'),
  alibabaNumber: DS.attr('number'),

  otherFakes: DS.hasMany('other-model'),

  validations: {
    name: {
      presence: true,
      inclusion: { in: ['Jose Rene', 'Aristi Gol', 'Armani'], message: 'Solo verde a morir' }
    },
    secondName: {
      exclusion: { in: ['Gionvany Hernandez', 'Wilder Medina'], message: 'Que iNrresponsabilidad' }
    },
    bussinessEmail: {
      presence: { message: 'sup dude, where\'s da email' },
      email: { message: 'Be professional ma men' }
    },
    email: {
      presence: true,
      email: true
    },
    mainstreamCode: {
      format: { with: /^[a-zA-Z]+$/, message: 'nu nu, that\'s not the format' }
    },
    legacyCode:{
      format: { with: /^[a-zA-Z]+$/ }
    },
    alibabaNumber: {
      numericality: { message: 'is not abracadabra' }
    },
    lotteryNumber: {
      numericality: true
    },
    otherFakes:{
      relations: ['hasMany']
    }
  }

});
