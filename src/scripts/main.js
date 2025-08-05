'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const body = document.body;

  notification.classList.add('notification', type);

  notification.style.position = 'fixed';

  const h2 = document.createElement('h2');

  h2.classList.add('title');

  h2.textContent = title;
  notification.append(h2);

  const p = document.createElement('p');

  p.textContent = description;

  notification.append(p);

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  body.append(notification);

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  163,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  287,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
