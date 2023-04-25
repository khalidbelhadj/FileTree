import {} from 'react'
import FileTree from './FileTree';
import { FileTreeNode } from './types';

export default function App() {
  return <FileTree node={mockData} indent={0} />;
}

var mockData: FileTreeNode = {
  name: 'root',
  files: [
    {
      name: 'Documents',
      files: [
        {
          name: 'Taxes.pdf'
        },
        {
          name: 'Receipts',
          files: [
            {
              name: 'Groceries.pdf'
            },
            {
              name: 'Electronics',
              files: [
                {
                  name: 'TV.docx'
                },
                {
                  name: 'Phone.pdf'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Music',
      files: [
        {
          name: 'Albums',
          files: [
            {
              name: 'Classical',
              files: [
                {
                  name: 'Beethoven.mp3'
                },
                {
                  name: 'Mozart.mp3'
                }
              ]
            },
            {
              name: 'Pop',
              files: [
                {
                  name: 'TaylorSwift.mp3'
                },
                {
                  name: 'ArianaGrande.mp3'
                }
              ]
            }
          ]
        },
        {
          name: 'Playlists',
          files: [
            {
              name: 'Favorites.mp3'
            },
            {
              name: 'Roadtrip.mp3'
            }
          ]
        }
      ]
    }]
};
