'use strict';

var
  html = require('raw!./view.modal.html'),
  modalTemplate = require('raw!./html/modal_template.html')
  ;

var number = 0;

function openBasicModal() {
  new quasar.Modal({
    template: '<p v-for="n in 10">This is a basic modal. Scroll down to close.</p><button class="secondary" @click="close()">Close Me</button>'
  })
  .css({
    padding: '50px',
    minWidth: '50vw'
  })
  .show();
}

function openBasicModalWithEvents() {
  new quasar.Modal({
    template: '<p v-for="n in 10">This is a basic modal. Scroll down to close.</p><button class="secondary" @click="close()">Close Me</button>'
  })
  .onShow(function() {
    quasar.notify('onShow triggered');
  })
  .onClose(function() {
    quasar.notify('onClose triggered');
  })
  .css({
    padding: '50px',
    minWidth: '50vw'
  })
  .show();
}

function openScreenModal() {
  new quasar.Modal({
    template: modalTemplate,
    data: {
      number: ++number
    },
    methods: {
      openModal: openScreenModal
    }
  }).css({
    minWidth: '80vw',
    minHeight: '80vh'
  }).show();
}

function openMinimizedModal() {
  new quasar.Modal({
    template: '<h1>Minimized Modal</h1><p>This one has backdrop on small screens too.</p>' +
              '<button class="tertiary" @click="close()">Close Me</button>'
  }).set({
    minimized: true
  }).css({
    padding: '50px'
  }).show();
}

function openMaximizedModal() {
  new quasar.Modal({
    template: '<h1>Maximized Modal</h1><p>This one is maximized on bigger screens too.</p>' +
              '<button class="tertiary" @click="close()">Close Me</button>'
  }).set({
    maximized: true
  }).css({
    padding: '50px'
  }).show();
}

module.exports = {
  template: html,
  data: {
    types: [
      {
        label: 'Basic Modal',
        handler: openBasicModal
      },
      {
        label: 'Basic Modal with Events',
        handler: openBasicModalWithEvents
      },
      {
        label: 'Screen Modal',
        handler: openScreenModal
      },
      {
        label: 'Always Minimized Modal',
        handler: openMinimizedModal
      },
      {
        label: 'Always Maximized Modal',
        handler: openMaximizedModal
      }
    ]
  }
};
