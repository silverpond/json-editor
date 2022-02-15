import { tailwindTheme } from './tailwind.js'
import rules from './tailwind.css.js'

export class silvereditTheme extends tailwindTheme {
  getFormCheckboxControl (label, input, compact) {
    label.insertBefore(input, label.firstChild) /* Move input into label element */
    if (compact) label.classList.add('inline-flex flex-row')
    input.classList.add('checkbox-label')
    return label
  }

  getFormRadioControl (label, input, compact) {
    label.insertBefore(input, label.firstChild) /* Move input into label element */
    if (compact) label.classList.add('form-radio')
    label.classList.add('radio-label')
    return label
  }
}

/* Custom stylesheet rules. (Does not support comma separated selectors) */
/*  Will create a stylesheet in document head with the id "theme-spectre" if not exists. */
silvereditTheme.rules = rules
