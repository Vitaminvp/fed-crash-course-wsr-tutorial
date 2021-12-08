export const colors = [
  { id: '0', value: 'Red' },
  { id: '1', value: 'Blue' },
  { id: '2', value: 'Green' },
  { id: '3', value: 'Yellow' },
  { id: '4', value: 'Pink' },
];

export const breadcrumbItems = [
  {
    id: 1,
    value: 'Root Page',
  },
  {
    id: 2,
    value: 'WSR Form',
  },
];

export const getInitFormState = () => ({
  firstName: '',
  lastName: '',
  selectedColorId: '',
});

export const getItemById = (index, list) => list.find(({ id }) => id === index);

export const tabs = [
  { id: 1, title: 'Layout' },
  { id: 2, title: 'Form' },
  { id: 3, title: 'Selection' },
  { id: 4, title: 'Wsr Form' },
];

export const options = [
  {
    id: 0,
    value: 'first option',
  },
  {
    id: 1,
    value: 'second option',
  },
  {
    id: 1,
    value: 'third option',
  },
];
