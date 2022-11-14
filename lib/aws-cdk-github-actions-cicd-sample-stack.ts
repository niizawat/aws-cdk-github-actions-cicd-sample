import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkGithubActionsCicdSampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkGithubActionsCicdSampleQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    new Bucket(this, 'SampleBucket', {
      bucketName: 'niz-sample-bucket'
    });
    
  }
}
