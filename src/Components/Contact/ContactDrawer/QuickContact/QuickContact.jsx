import React from 'react';
import EmailContact from './EmailContact';
import BookCallContact from './BookCallContact';

const QuickContact = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <EmailContact />
      <BookCallContact />
    </div>
  );
};

export default QuickContact;
