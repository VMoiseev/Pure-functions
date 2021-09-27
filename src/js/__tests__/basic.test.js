import checkHealth from '../app';

test('Значение больше 50', () => {
  expect(checkHealth({ name: 'Маг', health: 90 })).toBe('healthy');
});
test('Значение больше 14, но меньше 51, например 25', () => {
  expect(checkHealth({ name: 'Маг', health: 25 })).toBe('wounded');
});
test('Значение меньше 15, например 7', () => {
  expect(checkHealth({ name: 'Маг', health: 7 })).toBe('critical');
});
