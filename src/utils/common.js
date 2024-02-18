export function formatNumberWithSeparator(number) {
  return number.toLocaleString();
}

export function formatDate(inputDateString) {
  const inputDate = new Date(inputDateString);

  const options = {day: 'numeric', month: 'short', year: 'numeric'};
  return inputDate.toLocaleDateString('en-US', options);
}

export function formatDateTime(inputDateString) {
  const inputDate = new Date(inputDateString);

  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    // second: 'numeric',
    hour12: true, // Use 12-hour clock format
  };

  return inputDate.toLocaleDateString('en-US', options);
}

export function onTabNavigate(tabs, screen, navigation, isCartEmpty) {
  console.log('isCartEmpty', isCartEmpty, screen);

  if (screen == 'Order') {
    if (isCartEmpty) {
      navigation.navigate('MainLayout', {
        screen: 'CartIsEmpty',
      });
    } else {
      navigation.navigate('Order');
    }
  } else if (tabs.some(tab => tab.screen === screen)) {
    navigation.navigate('MainLayout', {
      screen: screen,
    });
  } else if (isCartEmpty) {
    navigation.navigate('MainLayout', {
      screen: 'CartIsEmpty',
    });
  } else {
    navigation.navigate(item.screen, {
      screen: screen,
    });
  }
}
