---
id: client-java-2.5.1
title: Client Java 2.5.1 
sidebar_label: Client Java 2.5.1 
---

[Issue 8294][docs]Some errors on the official website document of Pulsar Java client #8294 #8296  
[python client]Support generate pulsar-client for python3.8 #6741  
Fixed avro schema decode error in functions #6662  
Fix send get raw schema request #6650  
Fix admin getLastMessageId return batchIndex #6511  
[pulsar-client-cpp] Fix Redelivery of Messages on UnackedMessageTracker When Ack Messages . #6498  
[pulsar-client] remove duplicate cnx method #6490  
[pulsar-client] fix deadlock on send failure #6488  
Pulsar Java client: Use System.nanoTime() instead of System.currentTimeMillis() to measure elapsed time #6454  
[Java client] MultiTopics discovery is broken due to discovery task scheduled twice instead of pendingBatchRecei… #6407  
[Issue 3762][Schema] Fix wrong avro schema #6406  
Issue-6403: Consumer received duplicated deplayed messages upon restart #6404  
Seek to the first one >= timestamp #6393  
[Reader] Should set either start message id or start message from roll back duration. #6392  
[Issue 6168] Fix Unacked Message Tracker by Using Time Partition on C++ #6391  
fix duplicate key to send propertys #6390  
Independent schema is set for each consumer generated by topic #6356  
[Java Reader Client] Start reader inside batch result in read first message in batch. #6345  
client: make SubscriptionMode a member of ConsumerConfigurationData #6337  
[Fix-6273] Flush the potential duplicated message when add messages to a batch. #6326  
Fix get schema version in HttpLookupService. #6193  
Fix available permits may be greater than 1 even though queue size is 0. #6106  
Fix zero queue consumer message redelivery #6076  
[minor] make acker in BatchMessageIdImpl transient #6064  
