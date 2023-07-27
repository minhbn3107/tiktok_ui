import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, occurError: customOccurError = images.noImage, ...props }, ref) => {
  const [occurError, setOccurError] = useState('');

  const handleError = () => {
    setOccurError(customOccurError);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={occurError || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  occurError: PropTypes.string,
};

export default Image;
