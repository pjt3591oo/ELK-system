import pymongo
import time;

__conn = pymongo.MongoClient('127.0.0.1', 27017)

__db = __conn.get_database('Test')
test_collection = __db.get_collection('test_collection')

cnt = 1
while True:
# for idx in range(0, maxCnt):
  test_collection.save({
    'number': 123,
    'hash': '0x1234567',
    'array': [1,2,3,4],
    'timestamp': time.time()
  })
  print('======= %d success'%(cnt))

  cnt += 1
  time.sleep(0.5)