(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    './src/components/Card.mdx': function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t('./node_modules/react/index.js'),
        i = t.n(a),
        r = t('./node_modules/@mdx-js/tag/dist/index.js'),
        l = t('./node_modules/docz/dist/index.m.js'),
        o = t('./node_modules/react-emotion/dist/index.esm.js');
      function u() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n'
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      var d = Object(o.css)(u()),
        s = function(e) {
          var n = e.title;
          return a.createElement(
            'div',
            { className: d },
            a.createElement('p', null, n)
          );
        };
      try {
        (s.displayName = 'Card'),
          (s.__docgenInfo = {
            description: '',
            displayName: 'Card',
            props: {
              title: {
                defaultValue: null,
                description: 'Title to print on the card',
                name: 'title',
                required: !0,
                type: { name: 'string' }
              }
            }
          }),
          'undefined' !== typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Card.tsx#Card'] = {
              docgenInfo: s.__docgenInfo,
              name: 'Card',
              path: 'src/components/Card.tsx#Card'
            });
      } catch (e) {}
      function p() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })(['\n  margin: 1rem auto;\n  max-width: 30rem;\n  padding: 1rem;\n']);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      var m = Object(o.css)(p()),
        c = function(e) {
          var n = e.children;
          return a.createElement('div', { className: m }, n);
        };
      try {
        (c.displayName = 'Layout'),
          (c.__docgenInfo = {
            description: '',
            displayName: 'Layout',
            props: {}
          }),
          'undefined' !== typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Layout.tsx#Layout'] = {
              docgenInfo: c.__docgenInfo,
              name: 'Layout',
              path: 'src/components/Layout.tsx#Layout'
            });
      } catch (e) {}
      function v() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })(['\n  list-style: none;\n  margin-left: 0;\n']);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      var y = o.default.ul(v());
      try {
        (y.displayName = 'PlainList'),
          (y.__docgenInfo = {
            description: '',
            displayName: 'PlainList',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: { name: 'Ref<HTMLUListElement>' }
              },
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'ReactText' }
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' }
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' }
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' }
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' }
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' }
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' }
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' }
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' }
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'string' }
              },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' }
              },
              hidden: {
                defaultValue: null,
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' }
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' }
              },
              lang: {
                defaultValue: null,
                description: '',
                name: 'lang',
                required: !1,
                type: { name: 'string' }
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' }
              },
              slot: {
                defaultValue: null,
                description: '',
                name: 'slot',
                required: !1,
                type: { name: 'string' }
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' }
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' }
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' }
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' }
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' }
              },
              is: {
                defaultValue: null,
                description: '',
                name: 'is',
                required: !1,
                type: { name: 'string' }
              },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' }
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' }
              },
              about: {
                defaultValue: null,
                description: '',
                name: 'about',
                required: !1,
                type: { name: 'string' }
              },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' }
              },
              inlist: {
                defaultValue: null,
                description: '',
                name: 'inlist',
                required: !1,
                type: { name: 'any' }
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' }
              },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' }
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' }
              },
              typeof: {
                defaultValue: null,
                description: '',
                name: 'typeof',
                required: !1,
                type: { name: 'string' }
              },
              vocab: {
                defaultValue: null,
                description: '',
                name: 'vocab',
                required: !1,
                type: { name: 'string' }
              },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' }
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' }
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' }
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' }
              },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' }
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' }
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' }
              },
              itemID: {
                defaultValue: null,
                description: '',
                name: 'itemID',
                required: !1,
                type: { name: 'string' }
              },
              itemRef: {
                defaultValue: null,
                description: '',
                name: 'itemRef',
                required: !1,
                type: { name: 'string' }
              },
              results: {
                defaultValue: null,
                description: '',
                name: 'results',
                required: !1,
                type: { name: 'number' }
              },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' }
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' }
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' }
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\r\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' }
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' }
              },
              'aria-colcount': {
                defaultValue: null,
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' }
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' }
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' }
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' }
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: {
                  name:
                    'boolean | "time" | "false" | "true" | "page" | "step" | "location" | "date"'
                }
              },
              'aria-describedby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' }
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' }
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: {
                  name:
                    '"link" | "none" | "copy" | "execute" | "move" | "popup"'
                }
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' }
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\r\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' }
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: {
                  name:
                    'boolean | "dialog" | "menu" | "false" | "true" | "listbox" | "tree" | "grid"'
                }
              },
              'aria-hidden': {
                defaultValue: null,
                description:
                  'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: {
                  name: 'boolean | "false" | "true" | "grammar" | "spelling"'
                }
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' }
              },
              'aria-label': {
                defaultValue: null,
                description:
                  'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' }
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' }
              },
              'aria-level': {
                defaultValue: null,
                description:
                  'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' }
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' }
              },
              'aria-modal': {
                defaultValue: null,
                description:
                  'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-multiline': {
                defaultValue: null,
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' }
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\r\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' }
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\r\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' }
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' }
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' }
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: {
                  name:
                    '"text" | "additions" | "additions text" | "all" | "removals"'
                }
              },
              'aria-required': {
                defaultValue: null,
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-roledescription': {
                defaultValue: null,
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' }
              },
              'aria-rowcount': {
                defaultValue: null,
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' }
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' }
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' }
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' }
              },
              'aria-sort': {
                defaultValue: null,
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' }
              },
              'aria-valuemax': {
                defaultValue: null,
                description:
                  'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' }
              },
              'aria-valuemin': {
                defaultValue: null,
                description:
                  'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' }
              },
              'aria-valuenow': {
                defaultValue: null,
                description:
                  'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' }
              },
              'aria-valuetext': {
                defaultValue: null,
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' }
              },
              css: {
                defaultValue: null,
                description: '',
                name: 'css',
                required: !1,
                type: { name: 'Interpolation' }
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' }
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLUListElement>) => void'
                }
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLUListElement>) => void'
                }
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLUListElement>) => void'
                }
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLUListElement>) => void'
                }
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLUListElement>) => void'
                }
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLUListElement>) => void'
                }
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLUListElement>) => void'
                }
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLUListElement>) => void'
                }
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLUListElement>) => void'
                }
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLUListElement>) => void'
                }
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLUListElement>) => void'
                }
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLUListElement>) => void'
                }
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLUListElement>) => void' }
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLUListElement>) => void' }
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLUListElement>) => void' }
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLUListElement>) => void' }
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLUListElement>) => void'
                }
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLUListElement>) => void'
                }
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLUListElement>) => void'
                }
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLUListElement>) => void'
                }
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLUListElement>) => void'
                }
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLUListElement>) => void'
                }
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLUListElement>) => void' }
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLUListElement>) => void' }
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLUListElement>) => void' }
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLUListElement>) => void' }
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLUListElement>) => void'
                }
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLUListElement>) => void'
                }
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLUListElement>) => void'
                }
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLUListElement>) => void'
                }
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLUListElement>) => void'
                }
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLUListElement>) => void'
                }
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: {
                  name: '(event: TransitionEvent<HTMLUListElement>) => void'
                }
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: {
                  name: '(event: TransitionEvent<HTMLUListElement>) => void'
                }
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'any' }
              },
              innerRef: {
                defaultValue: null,
                description: '',
                name: 'innerRef',
                required: !1,
                type: { name: 'Ref<any>' }
              }
            }
          }),
          'undefined' !== typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/PlainList.tsx#PlainList'
            ] = {
              docgenInfo: y.__docgenInfo,
              name: 'PlainList',
              path: 'src/components/PlainList.tsx#PlainList'
            });
      } catch (e) {}
      try {
        (components.displayName = 'components'),
          (components.__docgenInfo = {
            description: '',
            displayName: 'components',
            props: {}
          }),
          'undefined' !== typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/index.ts#components'] = {
              docgenInfo: components.__docgenInfo,
              name: 'components',
              path: 'src/components/index.ts#components'
            });
      } catch (e) {}
      try {
        (StyledOtherComponent.displayName = 'StyledOtherComponent'),
          (StyledOtherComponent.__docgenInfo = {
            description: '',
            displayName: 'StyledOtherComponent',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: { name: 'Ref<HTMLUListElement>' }
              },
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'ReactText' }
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' }
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' }
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' }
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' }
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' }
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' }
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' }
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' }
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'string' }
              },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' }
              },
              hidden: {
                defaultValue: null,
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' }
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' }
              },
              lang: {
                defaultValue: null,
                description: '',
                name: 'lang',
                required: !1,
                type: { name: 'string' }
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' }
              },
              slot: {
                defaultValue: null,
                description: '',
                name: 'slot',
                required: !1,
                type: { name: 'string' }
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' }
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' }
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' }
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' }
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' }
              },
              is: {
                defaultValue: null,
                description: '',
                name: 'is',
                required: !1,
                type: { name: 'string' }
              },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' }
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' }
              },
              about: {
                defaultValue: null,
                description: '',
                name: 'about',
                required: !1,
                type: { name: 'string' }
              },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' }
              },
              inlist: {
                defaultValue: null,
                description: '',
                name: 'inlist',
                required: !1,
                type: { name: 'any' }
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' }
              },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' }
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' }
              },
              typeof: {
                defaultValue: null,
                description: '',
                name: 'typeof',
                required: !1,
                type: { name: 'string' }
              },
              vocab: {
                defaultValue: null,
                description: '',
                name: 'vocab',
                required: !1,
                type: { name: 'string' }
              },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' }
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' }
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' }
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' }
              },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' }
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' }
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' }
              },
              itemID: {
                defaultValue: null,
                description: '',
                name: 'itemID',
                required: !1,
                type: { name: 'string' }
              },
              itemRef: {
                defaultValue: null,
                description: '',
                name: 'itemRef',
                required: !1,
                type: { name: 'string' }
              },
              results: {
                defaultValue: null,
                description: '',
                name: 'results',
                required: !1,
                type: { name: 'number' }
              },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' }
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' }
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' }
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\r\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' }
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' }
              },
              'aria-colcount': {
                defaultValue: null,
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' }
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' }
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' }
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' }
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: {
                  name:
                    'boolean | "time" | "false" | "true" | "page" | "step" | "location" | "date"'
                }
              },
              'aria-describedby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' }
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' }
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: {
                  name:
                    '"link" | "none" | "copy" | "execute" | "move" | "popup"'
                }
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' }
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\r\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' }
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: {
                  name:
                    'boolean | "dialog" | "menu" | "false" | "true" | "listbox" | "tree" | "grid"'
                }
              },
              'aria-hidden': {
                defaultValue: null,
                description:
                  'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: {
                  name: 'boolean | "false" | "true" | "grammar" | "spelling"'
                }
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' }
              },
              'aria-label': {
                defaultValue: null,
                description:
                  'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' }
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' }
              },
              'aria-level': {
                defaultValue: null,
                description:
                  'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' }
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' }
              },
              'aria-modal': {
                defaultValue: null,
                description:
                  'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-multiline': {
                defaultValue: null,
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' }
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\r\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' }
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\r\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' }
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' }
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' }
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: {
                  name:
                    '"text" | "additions" | "additions text" | "all" | "removals"'
                }
              },
              'aria-required': {
                defaultValue: null,
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-roledescription': {
                defaultValue: null,
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' }
              },
              'aria-rowcount': {
                defaultValue: null,
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' }
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' }
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' }
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' }
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' }
              },
              'aria-sort': {
                defaultValue: null,
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' }
              },
              'aria-valuemax': {
                defaultValue: null,
                description:
                  'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' }
              },
              'aria-valuemin': {
                defaultValue: null,
                description:
                  'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' }
              },
              'aria-valuenow': {
                defaultValue: null,
                description:
                  'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' }
              },
              'aria-valuetext': {
                defaultValue: null,
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' }
              },
              css: {
                defaultValue: null,
                description: '',
                name: 'css',
                required: !1,
                type: { name: 'Interpolation' }
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' }
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLUListElement>) => void'
                }
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLUListElement>) => void'
                }
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLUListElement>) => void'
                }
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLUListElement>) => void'
                }
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLUListElement>) => void'
                }
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLUListElement>) => void'
                }
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLUListElement>) => void'
                }
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLUListElement>) => void'
                }
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLUListElement>) => void'
                }
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLUListElement>) => void'
                }
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLUListElement>) => void'
                }
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLUListElement>) => void'
                }
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLUListElement>) => void' }
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLUListElement>) => void' }
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLUListElement>) => void' }
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLUListElement>) => void' }
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLUListElement>) => void' }
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLUListElement>) => void'
                }
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLUListElement>) => void'
                }
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLUListElement>) => void'
                }
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLUListElement>) => void'
                }
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLUListElement>) => void'
                }
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLUListElement>) => void'
                }
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLUListElement>) => void' }
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLUListElement>) => void' }
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLUListElement>) => void'
                }
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLUListElement>) => void' }
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLUListElement>) => void'
                }
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLUListElement>) => void' }
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLUListElement>) => void' }
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLUListElement>) => void' }
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLUListElement>) => void' }
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLUListElement>) => void'
                }
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLUListElement>) => void'
                }
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLUListElement>) => void'
                }
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLUListElement>) => void'
                }
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLUListElement>) => void'
                }
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLUListElement>) => void'
                }
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: {
                  name: '(event: TransitionEvent<HTMLUListElement>) => void'
                }
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: {
                  name: '(event: TransitionEvent<HTMLUListElement>) => void'
                }
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'any' }
              },
              innerRef: {
                defaultValue: null,
                description: '',
                name: 'innerRef',
                required: !1,
                type: { name: 'Ref<any>' }
              }
            }
          }),
          'undefined' !== typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/index.ts#StyledOtherComponent'
            ] = {
              docgenInfo: StyledOtherComponent.__docgenInfo,
              name: 'StyledOtherComponent',
              path: 'src/components/index.ts#StyledOtherComponent'
            });
      } catch (e) {}
      function f(e, n) {
        if (null == e) return {};
        var t,
          a,
          i = (function(e, n) {
            if (null == e) return {};
            var t,
              a,
              i = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++)
              (t = r[a]), n.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (t = r[a]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (i[t] = e[t]));
        }
        return i;
      }
      n.default = function(e) {
        var n = e.components,
          t = f(e, ['components']);
        return i.a.createElement(
          r.MDXTag,
          { name: 'wrapper', components: n },
          i.a.createElement(
            r.MDXTag,
            { name: 'h1', components: n, props: { id: 'card' } },
            'Card'
          ),
          i.a.createElement(
            r.MDXTag,
            { name: 'p', components: n },
            'A simple card component for text.'
          ),
          i.a.createElement(l.PropsTable, { of: s }),
          i.a.createElement(
            l.Playground,
            {
              __position: 1,
              __codesandbox:
                'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmABxXAEHJ5DdE12k9OABHIQEnWofQ4EkVRsEDAV7U1c0kLlBVzUDMxdFRY5TgAL2cAhEmxdhuHYYB1iiARnlQK52gABnYVMZiwdpDzrGZuxYed-IAFlE9gADZRPE9YwFAgAxH1oESfj-GcQ5EUdTB2AABSEfgliIahKDgKTETUusNJoZwIHoy52AARjkiT5FVINUBoqYAEE5jY9hoxg8gbCgdBI3YeROTYsRIrjGR2FRFiYG4YBj0Y5jsXkXd62AGLoHi4IADIqvGRJ5koZpyrihLuDa-UwFCIK-1Qdp2AAfg2CrI2jZKrmayrUHkON91kMxPzMWENWOGAwDCKAplGlK0rrRgwrXOtk3sOCchiAhYD4EAGl4Xh2jlVxVng_h2B3Gb9trTlfxANCMM-LcaFw_DcAIYCdFA_QGCWh0YOO-DErIj1JFh9BAyh6D2AAGVcVpwnh41yM9LGcffAK0Y48yoFcNAMdsKZEPxxGzMp6nacDL6fswrMcKRk6cBBrAyDBvRwMg4j2CMEI7BDKUEYopUArtZborgOx6fdOXLRgGyeqo1A0FoAQ1uMizKBHTi62MCXLBeWBR0HOcDnMCZujiOHeXWM7YCuVE5xSALpsC4LHvQJjsois44GKdZqgtOA_BOEYriEhSfAADkUoSeI8VxowEpY8_YAuBJwAAmb9o-FWcLUyFg8iuABWUSAosKSewKJOcHrro5S87uAuKBWXSwMWg-RiKovGG3unkK4TbuZLuFS2Ndoy8hKZVgA5H0crKk7Q9gYr10bMRgE9mB5FXEqpBkD6AvZ9DOf-kHJCJ_Y-bgAXtF0MCDAgojlolv4dg0tpTqzNPLcEesoLkwjnjMBWoLRaxEAMXqg8g5ZVtuxCOUc6zcV4lcXuWsQjhEoM3dgUQsAWlxOgCYVxUwCT7usVuMkUgEMYagAekD9YZCNt0OedhzYWAmpGK4ICcAgI3qWf2kCyZB1frjdiE9hHBBnuZYccAF5L3SmwHo684Bb1PLlDB58T7KKmtfBM8075KG-g_P62EAaSCZlTVANNUTv0_iBYWv9RYAMlsArUstwEky4dA4xOQGYa0QdrFButZHUFos4lmtF2LhJwKEKAOCLBQFprHQqnkfgujIXgtAFpYBgAIEnfu1jlAOW2K4NIQFqCC2_hDCCgj2D8FQNvfgVx-BAmJFUbwGREFYB9OSJkIAJIWH4KwDI-RqC9M6SAYuqyrLrH4OUcg_QZg9SWfwEKmUiK23_BMla5JKCJALHkAo04EEDJBMMgQ6y6z8CiGgfZKgowaDgC8mZIBMDzCjEFCA8AlkdP-cEz5AA9LySlO6lz-fWfgSC9lIGWdCgAnKXHAXkBJIshQg1FKCYXYpLri_FUz1z8GCVaSIMK4UIpLvwdYAd5Ds0ebgXQkAUhNNQC08GItOIgFoL6LIvT-lmloNXBBswZj8HZfIJVQA',
              __code: '<Card title="I\'m a card" />',
              __scope: { props: t, Card: s }
            },
            i.a.createElement(s, { title: "I'm a card" })
          )
        );
      };
    }
  }
]);
