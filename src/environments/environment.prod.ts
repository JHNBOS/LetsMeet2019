export const environment = {
  production: true,
  email_regex: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  password_regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$',
  error_messages: {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'firstName': [
      { type: 'required', message: 'First name is required' }
    ],
    'lastName': [
      { type: 'required', message: 'Last name is required' }
    ],
    'groupName': [
      { type: 'required', message: 'Group name is required' }
    ],
  }
};
