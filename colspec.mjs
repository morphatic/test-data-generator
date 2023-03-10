export default [
  {
    name: 'id',
    cat: 'datatype',
    type: 'number',
    opts: true,
    unique: true,
    min: 100001,
    max: 999999,
    precision: 1,
  },
  {
    name: 'Transaction Date',
    variants: [
      'Txn Date',
      'Date of Transaction',
    ],
    cat: 'date',
    type: 'past',
    years: 3,
    refDate: 'now',
  },
  {
    name: 'Verification Date',
    variants: [
      'Verified Date',
      'Date Verified',
    ],
    cat: 'date',
    type: 'soon',
    days: 7,
    refDate: 'Transaction Date',
  },
  {
    name: 'Transaction Amount',
    variants: [
      'Txn Amt',
      'Amount of Transaction',
    ],
    cat: 'finance',
    type: 'amount',
    convert: true,
    min: 100,
    max: 99999,
    dec: 2,
  },
  {
    name: 'Transaction Fee',
    variants: [
      'Txn Fee',
      'Fee for Transaction',
    ],
    cat: 'finance',
    type: 'amount',
    convert: true,
    min: 2,
    max: 50,
    dec: 2,
  },
  {
    name: 'From',
    variants: [
      'Sender',
      'Origin',
    ],
    cat: 'finance',
    type: 'account',
  },
  {
    name: 'To',
    variants: [
      'Receiver',
      'Destination',
    ],
    cat: 'finance',
    type: 'account',
  },
  {
    name: 'Sender Name',
    variants: [
      'From Name',
      'Origin Name',
    ],
    cat: 'company',
    type: 'name',
  },
  {
    name: 'Receiver Name',
    variants: [
      'To Name',
      'Destination Name',
    ],
    cat: 'company',
    type: 'name',
  },
  {
    name: 'Account Type',
    variants: [
      'Acct Type',
      'Type of Account',
    ],
    cat: 'commerce',
    type: 'department',
  },
  {
    name: 'From Latitude',
    variants: [
      'From Lat',
      'Sender Lat',
    ],
    cat: 'address',
    type: 'latitude',
    convert: true,
    optional: true,
  },
  {
    name: 'From Longitude',
    variants: [
      'From Long',
      'Sender Lon',
    ],
    cat: 'address',
    type: 'longitude',
    convert: true,
    optional: true,
  },
  {
    name: 'To Latitude',
    variants: [
      'To Lat',
      'Receiver Lat',
    ],
    cat: 'address',
    type: 'latitude',
    convert: true,
    optional: true,
  },
  {
    name: 'To Longitude',
    variants: [
      'To Long',
      'Receiver Lon',
    ],
    cat: 'address',
    type: 'longitude',
    convert: true,
    optional: true,
  },
]
