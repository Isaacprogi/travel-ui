import React from 'react';
import styles from './imageStack.module.css';
import { ActiveUser } from '../../../types/types';
import Image from 'next/image';

interface Props {
  users: ActiveUser[];
}

const ImageStack: React.FC<Props> = ({ users }) => {
  const displayUsers = users.length > 4 ? users.slice(0, 4) : users;
  const remainingCount = users.length > 4 ? users.length - 4 : 0;

  return (
    <div className={styles.imageStack}>
      {displayUsers.map((user: ActiveUser, index: number) => (
        <div
          style={{ marginLeft: index === 0 ? 0 : -10 }}
          key={user.id}
          className={styles.imageContainer}
        >
          <Image src={user.avatar} alt={`User ${index + 1}`} />
        </div>
      ))}
      {remainingCount > 0 && (
        <div className={styles.remainingContainer} style={{ marginLeft: -20 }}>
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default ImageStack;
