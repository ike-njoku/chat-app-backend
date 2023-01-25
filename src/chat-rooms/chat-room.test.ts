import { request as req, response as res } from 'express';
import { CreateChatRoomDTO } from '../shared/interface';
import { ChatRoomSampleData } from '../shared/utilities/test.helper';
import { handleCreateChatRoom } from './chat-room-service';
import { createChatRoom } from './chat-room.controller';

describe('handleCreateChatRoom', () => {
  it ('should be defined', () => {
    expect(handleCreateChatRoom).toBeDefined();
  });
});

describe('Post /chat-rooms/create', () => {
  it('should be defined', () => {
    expect(createChatRoom).toBeDefined();
  });

  it('#createChatRoom should call #handleCreateChatRoom once', async() => {
    // const spy = jest.mock('./chat-room-service', handleCreateChatRoom);
    req.body = ChatRoomSampleData.newRoomDTOWithCompleteData;
    await createChatRoom(req, res)
      .then((response) => {
        expect(handleCreateChatRoom).toHaveBeenCalledTimes(7);
      })
      .catch((error) => {
      })
  })
});