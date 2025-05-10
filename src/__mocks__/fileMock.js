module.exports = 'test-file-stub';

jest.mock('react-native-fast-image', () => {
  const MockFastImage = jest.fn().mockImplementation(({ children }) => {
    return children || null;
  });

  MockFastImage.resizeMode = {
    contain: 'contain',
    cover: 'cover',
    stretch: 'stretch',
    center: 'center',
  };

  return MockFastImage;
});

jest.mock('@/config/i18n', () => ({
  language: 'pt',
  changeLanguage: jest.fn(), // Mock da função
  t: jest.fn((key) => key),
}));
