import React from 'react';

import { Card } from './Card';

export const List = ({ gifs }) => <>{ gifs.ids.map(gifId => <Card key={ gifId } gif={ gifs.byId[gifId] } />)}</>;