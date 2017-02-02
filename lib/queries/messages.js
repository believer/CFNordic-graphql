import {
  GraphQLError,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql'

import Message from '../models/Message'
import fetch from '../utils/fetch'

const validTypes = [
  'internetSubscriptionTerms',
  'orderConfirmationEmail',
  'orderReminder',
  'orderReminder2',
  'orderReminder3',
  'orderReminder4',
  'bookingInfoContent',
  'playerInvitation',
  'cancelContractActivityMail',
  'forgottenPasswordMail',
  'movedFromWaitingListMail',
  'changeEmailMail',
  'emailtemplate',
  'medgivandeViaHemsidaInfo',
  'appInfo',
  'receiptEmail',
  'invoiceReceiptEmail',
  'suspendedMail',
  'myPageContent',
  'newPersonNotificationMail',
  'confirmationReminderMail',
  'movedFromWaitingListSms',
  'localExpressions',
  'noShowMail',
  'substituteRequestConfirmation',
  'substituteRequestNotificationNo',
  'substituteRequestNotificationTimeout',
  'substituteRequestNotificationYes',
  'substituteRequest',
  'substituteRequestSms',
  'autogiroTerms',
  'internetBookingTerms',
  'welcomeMail'
]

export default {
  type: new GraphQLList(Message),
  description: 'List all messages of type',
  args: {
    type: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },

  resolve: (root, { type }) => {
    if (!validTypes.includes(type)) {
      throw new GraphQLError('Invalid type');
    }

    return fetch('messages.json', { type })
      .then(({ messages }) => messages)
  }
}