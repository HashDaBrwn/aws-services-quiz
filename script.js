document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const quiz = document.getElementById('quiz');
    const resultsScreen = document.getElementById('results-screen');
    const reviewScreen = document.getElementById('review-screen');
    const startBtn = document.getElementById('start-btn');
    const questionCountInput = document.getElementById('question-count');
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options');
    const result = document.getElementById('result');
    const feedback = document.getElementById('feedback');
    const correctAnswer = document.getElementById('correct-answer');
    const definition = document.getElementById('definition');
    const incorrectExplanation = document.getElementById('incorrect-explanation');
    const prevBtn = document.getElementById('prev-btn');
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    const scoreDisplay = document.getElementById('score');
    const finalScore = document.getElementById('final-score');
    const categoryResults = document.getElementById('category-results');
    const restartBtn = document.getElementById('restart-btn');
    const reviewBtn = document.getElementById('review-btn');
    const reviewQuestions = document.getElementById('review-questions');
    const reviewPrevBtn = document.getElementById('review-prev-btn');
    const reviewNextBtn = document.getElementById('review-next-btn');
    const backToResultsBtn = document.getElementById('back-to-results-btn');

    let questions = [
        {
            "id": 1, "category": "Analytics", 
            "question": "You need to run SQL queries on data stored in S3 without managing servers. Which service should you use?", 
            "options": ["Amazon S3", "Amazon Athena", "AWS Lambda", "Amazon EC2"], 
            "answer": "Amazon Athena", 
            "definition": "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. It is serverless, so there is no infrastructure to manage.", 
            "incorrect_explanations": {
                "Amazon S3": "Amazon S3 is a storage service, not for running SQL queries.",
                "AWS Lambda": "AWS Lambda is a compute service for running code, not for querying data.",
                "Amazon EC2": "Amazon EC2 provides virtual servers that require management, unlike Athena."
            }
        },
        {
            "id": 2, "category": "Analytics", 
            "question": "A company wants to access weather data from a third-party provider in AWS. Which service enables this?", 
            "options": ["AWS Data Exchange", "Amazon EMR", "AWS Glue", "Amazon Kinesis"], 
            "answer": "AWS Data Exchange", 
            "definition": "AWS Data Exchange makes it easy to find, subscribe to, and use third-party data in the cloud, including datasets like weather data.", 
            "incorrect_explanations": {
                "Amazon EMR": "Amazon EMR is for processing large datasets, not accessing third-party data.",
                "AWS Glue": "AWS Glue is an ETL service, not for subscribing to external datasets.",
                "Amazon Kinesis": "Amazon Kinesis handles real-time data streaming, not third-party data subscriptions."
            }
        },
        {
            "id": 3, "category": "Analytics", 
            "question": "Which service should you use to process massive datasets using Apache Spark?", 
            "options": ["Amazon Athena", "Amazon EMR", "AWS Glue", "Amazon OpenSearch Service"], 
            "answer": "Amazon EMR", 
            "definition": "Amazon EMR provides a managed Hadoop framework to process large-scale data using tools like Apache Spark.", 
            "incorrect_explanations": {
                "Amazon Athena": "Amazon Athena is for SQL queries on S3, not Spark-based processing.",
                "AWS Glue": "AWS Glue is an ETL service, not optimized for Spark-based big data processing.",
                "Amazon OpenSearch Service": "Amazon OpenSearch Service is for search and analytics, not Spark processing."
            }
        },
        {
            "id": 4, "category": "Analytics", 
            "question": "You need to extract, transform, and load data into a data lake. Which service is best?", 
            "options": ["Amazon EMR", "AWS Glue", "Amazon Kinesis", "Amazon QuickSight"], 
            "answer": "AWS Glue", 
            "definition": "AWS Glue is a serverless ETL service that automates data extraction, transformation, and loading.", 
            "incorrect_explanations": {
                "Amazon EMR": "Amazon EMR is for big data processing, not specifically for ETL workflows.",
                "Amazon Kinesis": "Amazon Kinesis is for real-time data streaming, not ETL processes.",
                "Amazon QuickSight": "Amazon QuickSight is for data visualization, not data extraction or loading."
            }
        },
        {
            "id": 5, "category": "Analytics", 
            "question": "A company needs to process real-time clickstream data from a website. Which service is ideal?", 
            "options": ["Amazon Kinesis", "Amazon MSK", "Amazon S3", "AWS Glue"], 
            "answer": "Amazon Kinesis", 
            "definition": "Amazon Kinesis enables real-time processing of streaming data, such as clickstreams.", 
            "incorrect_explanations": {
                "Amazon MSK": "Amazon MSK is for managed Kafka, which is more complex for simple clickstream processing.",
                "Amazon S3": "Amazon S3 is for storage, not real-time data processing.",
                "AWS Glue": "AWS Glue is for ETL, not real-time streaming."
            }
        },
        {
            "id": 6, "category": "Analytics", 
            "question": "Your application uses Apache Kafka for streaming. Which AWS service provides a managed Kafka environment?", 
            "options": ["Amazon Kinesis", "Amazon MSK", "Amazon OpenSearch Service", "Amazon Redshift"], 
            "answer": "Amazon MSK", 
            "definition": "Amazon MSK is a fully managed service for running Apache Kafka.", 
            "incorrect_explanations": {
                "Amazon Kinesis": "Amazon Kinesis is a different streaming platform, not Kafka-based.",
                "Amazon OpenSearch Service": "Amazon OpenSearch Service is for search and analytics, not streaming.",
                "Amazon Redshift": "Amazon Redshift is a data warehouse, not a streaming service."
            }
        },
        {
            "id": 7, "category": "Analytics", 
            "question": "Which service should you use to analyze and visualize log data from applications?", 
            "options": ["Amazon QuickSight", "Amazon OpenSearch Service", "Amazon Athena", "Amazon Redshift"], 
            "answer": "Amazon OpenSearch Service", 
            "definition": "Amazon OpenSearch Service is designed for analyzing and visualizing log data.", 
            "incorrect_explanations": {
                "Amazon QuickSight": "Amazon QuickSight is for business intelligence dashboards, not log analysis.",
                "Amazon Athena": "Amazon Athena is for SQL queries on S3, not optimized for log visualization.",
                "Amazon Redshift": "Amazon Redshift is a data warehouse, not suited for real-time log analysis."
            }
        },
        {
            "id": 8, "category": "Analytics", 
            "question": "A team needs to create interactive dashboards for business metrics. Which service should they use?", 
            "options": ["Amazon OpenSearch Service", "Amazon QuickSight", "Amazon EMR", "AWS Glue"], 
            "answer": "Amazon QuickSight", 
            "definition": "Amazon QuickSight is a business intelligence service for creating dashboards.", 
            "incorrect_explanations": {
                "Amazon OpenSearch Service": "Amazon OpenSearch Service is for log and search analytics, not business dashboards.",
                "Amazon EMR": "Amazon EMR is for big data processing, not dashboard creation.",
                "AWS Glue": "AWS Glue is for ETL, not visualization."
            }
        },
        {
            "id": 9, "category": "Analytics", 
            "question": "Which service is best for running complex SQL queries on a petabyte-scale data warehouse?", 
            "options": ["Amazon Athena", "Amazon Redshift", "Amazon S3", "AWS Data Exchange"], 
            "answer": "Amazon Redshift", 
            "definition": "Amazon Redshift is a petabyte-scale data warehouse optimized for complex SQL queries.", 
            "incorrect_explanations": {
                "Amazon Athena": "Amazon Athena is for ad-hoc queries on S3, not petabyte-scale warehousing.",
                "Amazon S3": "Amazon S3 is for storage, not querying or warehousing.",
                "AWS Data Exchange": "AWS Data Exchange is for accessing third-party data, not warehousing."
            }
        },
        {
            "id": 10, "category": "Application Integration", 
            "question": "You need to trigger a Lambda function when an S3 bucket is updated. Which service facilitates this?", 
            "options": ["Amazon EventBridge", "Amazon SNS", "Amazon SQS", "AWS Step Functions"], 
            "answer": "Amazon EventBridge", 
            "definition": "Amazon EventBridge routes events, like S3 updates, to targets like Lambda.", 
            "incorrect_explanations": {
                "Amazon SNS": "Amazon SNS is for pub/sub messaging, not event routing for S3 triggers.",
                "Amazon SQS": "Amazon SQS is for message queuing, not event-based triggers.",
                "AWS Step Functions": "AWS Step Functions is for workflow coordination, not event triggering."
            }
        },
        {
            "id": 11, "category": "Application Integration", 
            "question": "Which service allows you to send push notifications to mobile devices?", 
            "options": ["Amazon SQS", "Amazon SNS", "AWS AppSync", "Amazon MQ"], 
            "answer": "Amazon SNS", 
            "definition": "Amazon SNS supports sending push notifications to mobile devices and other endpoints.", 
            "incorrect_explanations": {
                "Amazon SQS": "Amazon SQS is for message queuing, not push notifications.",
                "AWS AppSync": "AWS AppSync is for GraphQL APIs, not notifications.",
                "Amazon MQ": "Amazon MQ is for message brokers, not push notifications."
            }
        },
        {
            "id": 12, "category": "Application Integration", 
            "question": "You need a message broker for legacy applications using ActiveMQ. Which service is best?", 
            "options": ["Amazon SNS", "Amazon SQS", "Amazon MQ", "Amazon EventBridge"], 
            "answer": "Amazon MQ", 
            "definition": "Amazon MQ is a managed message broker service for ActiveMQ and RabbitMQ.", 
            "incorrect_explanations": {
                "Amazon SNS": "Amazon SNS is for notifications, not message brokering.",
                "Amazon SQS": "Amazon SQS is for queuing, not ActiveMQ support.",
                "Amazon EventBridge": "Amazon EventBridge is for event routing, not message brokering."
            }
        },
        {
            "id": 13, "category": "Analytics", 
            "question": "Which service provides real-time data analytics for streaming data?", 
            "options": ["Amazon Redshift", "Amazon Kinesis Data Analytics", "AWS Glue", "Amazon Athena"], 
            "answer": "Amazon Kinesis Data Analytics", 
            "definition": "Amazon Kinesis Data Analytics processes and analyzes streaming data in real time.", 
            "incorrect_explanations": {
                "Amazon Redshift": "Amazon Redshift is for data warehousing, not real-time analytics.",
                "AWS Glue": "AWS Glue is for ETL, not real-time data processing.",
                "Amazon Athena": "Amazon Athena is for querying S3 data, not streaming analytics."
            }
        },
        {
            "id": 14, "category": "Analytics", 
            "question": "A company needs to ingest data into a data lake at scale. Which service is ideal?", 
            "options": ["Amazon Kinesis Firehose", "Amazon EMR", "Amazon QuickSight", "AWS Data Pipeline"], 
            "answer": "Amazon Kinesis Firehose", 
            "definition": "Amazon Kinesis Firehose is designed for ingesting and delivering streaming data to data lakes.", 
            "incorrect_explanations": {
                "Amazon EMR": "Amazon EMR is for big data processing, not data ingestion.",
                "Amazon QuickSight": "Amazon QuickSight is for visualization, not data ingestion.",
                "AWS Data Pipeline": "AWS Data Pipeline is for data workflows, not real-time ingestion."
            }
        },
        {
            "id": 15, "category": "Analytics", 
            "question": "You need to orchestrate data movement between AWS services. Which service should you use?", 
            "options": ["AWS Data Pipeline", "Amazon Kinesis", "AWS Glue", "Amazon Redshift"], 
            "answer": "AWS Data Pipeline", 
            "definition": "AWS Data Pipeline orchestrates and automates data movement and transformation.", 
            "incorrect_explanations": {
                "Amazon Kinesis": "Amazon Kinesis is for streaming, not general data orchestration.",
                "AWS Glue": "AWS Glue is for ETL, not broad orchestration.",
                "Amazon Redshift": "Amazon Redshift is for data warehousing, not data movement."
            }
        },
        {
            "id": 16, "category": "Analytics", 
            "question": "Which service provides a centralized view of your data lake metadata?", 
            "options": ["AWS Glue Data Catalog", "Amazon S3", "Amazon Redshift Spectrum", "AWS Data Exchange"], 
            "answer": "AWS Glue Data Catalog", 
            "definition": "AWS Glue Data Catalog stores metadata for data lake assets, enabling centralized management.", 
            "incorrect_explanations": {
                "Amazon S3": "Amazon S3 is for storage, not metadata management.",
                "Amazon Redshift Spectrum": "Amazon Redshift Spectrum queries S3 data, not manages metadata.",
                "AWS Data Exchange": "AWS Data Exchange is for third-party data, not metadata catalogs."
            }
        },
        {
            "id": 17, "category": "Application Integration", 
            "question": "You need to integrate applications using a publish/subscribe model. Which service is best?", 
            "options": ["Amazon SQS", "Amazon SNS", "AWS Step Functions", "Amazon MQ"], 
            "answer": "Amazon SNS", 
            "definition": "Amazon SNS uses a publish/subscribe model to integrate applications via notifications.", 
            "incorrect_explanations": {
                "Amazon SQS": "Amazon SQS is for queuing, not pub/sub.",
                "AWS Step Functions": "AWS Step Functions is for workflows, not pub/sub.",
                "Amazon MQ": "Amazon MQ is for message brokering, not simple pub/sub."
            }
        },
        {
            "id": 18, "category": "Application Integration", 
            "question": "Which service allows you to build serverless workflows with visual designer?", 
            "options": ["Amazon EventBridge", "AWS Step Functions", "Amazon SNS", "Amazon SQS"], 
            "answer": "AWS Step Functions", 
            "definition": "AWS Step Functions enables serverless workflows with a visual designer for orchestration.", 
            "incorrect_explanations": {
                "Amazon EventBridge": "Amazon EventBridge is for event routing, not visual workflows.",
                "Amazon SNS": "Amazon SNS is for notifications, not workflows.",
                "Amazon SQS": "Amazon SQS is for queuing, not workflow orchestration."
            }
        },
        {
            "id": 19, "category": "Analytics", 
            "question": "A company needs to analyze IoT sensor data in real time. Which service is best?", 
            "options": ["Amazon Kinesis Data Analytics", "Amazon Redshift", "AWS Glue", "Amazon Athena"], 
            "answer": "Amazon Kinesis Data Analytics", 
            "definition": "Amazon Kinesis Data Analytics processes IoT sensor data in real time.", 
            "incorrect_explanations": {
                "Amazon Redshift": "Amazon Redshift is for data warehousing, not real-time analytics.",
                "AWS Glue": "AWS Glue is for ETL, not real-time processing.",
                "Amazon Athena": "Amazon Athena is for querying S3, not real-time IoT data."
            }
        },
        {
            "id": 20, "category": "Analytics", 
            "question": "Which service provides serverless data integration for analytics?", 
            "options": ["Amazon EMR", "AWS Glue", "Amazon Kinesis", "Amazon QuickSight"], 
            "answer": "AWS Glue", 
            "definition": "AWS Glue is a serverless data integration service for analytics workflows.", 
            "incorrect_explanations": {
                "Amazon EMR": "Amazon EMR requires cluster management, not serverless.",
                "Amazon Kinesis": "Amazon Kinesis is for streaming, not general data integration.",
                "Amazon QuickSight": "Amazon QuickSight is for visualization, not data integration."
            }
        },
        {
            "id": 21, "category": "Analytics", 
            "question": "You need to query data in S3 using SQL without loading it into a database. Which service?", 
            "options": ["Amazon Redshift Spectrum", "Amazon Athena", "AWS Glue", "Amazon EMR"], 
            "answer": "Amazon Athena", 
            "definition": "Amazon Athena allows SQL queries on S3 data without loading it into a database.", 
            "incorrect_explanations": {
                "Amazon Redshift Spectrum": "Amazon Redshift Spectrum requires a Redshift cluster.",
                "AWS Glue": "AWS Glue is for ETL, not direct querying.",
                "Amazon EMR": "Amazon EMR is for big data processing, not simple SQL queries."
            }
        },
        {
            "id": 22, "category": "Analytics", 
            "question": "Which service is best for visualizing data from multiple AWS data sources?", 
            "options": ["Amazon OpenSearch Service", "Amazon QuickSight", "Amazon Redshift", "AWS Glue"], 
            "answer": "Amazon QuickSight", 
            "definition": "Amazon QuickSight integrates with AWS data sources for data visualization.", 
            "incorrect_explanations": {
                "Amazon OpenSearch Service": "Amazon OpenSearch Service is for log analytics, not general visualization.",
                "Amazon Redshift": "Amazon Redshift is for data warehousing, not visualization.",
                "AWS Glue": "AWS Glue is for ETL, not visualization."
            }
        },
        {
            "id": 23, "category": "Application Integration", 
            "question": "You need to route events from multiple sources to a single target. Which service?", 
            "options": ["Amazon SNS", "Amazon SQS", "Amazon EventBridge", "AWS Step Functions"], 
            "answer": "Amazon EventBridge", 
            "definition": "Amazon EventBridge routes events from multiple sources to a single target.", 
            "incorrect_explanations": {
                "Amazon SNS": "Amazon SNS is for notifications, not multi-source event routing.",
                "Amazon SQS": "Amazon SQS is for queuing, not event routing.",
                "AWS Step Functions": "AWS Step Functions is for workflows, not event routing."
            }
        },
        {
            "id": 24, "category": "Application Integration", 
            "question": "Which service provides a queue for delayed message processing?", 
            "options": ["Amazon SNS", "Amazon SQS", "Amazon MQ", "Amazon EventBridge"], 
            "answer": "Amazon SQS", 
            "definition": "Amazon SQS provides queues for delayed message processing.", 
            "incorrect_explanations": {
                "Amazon SNS": "Amazon SNS is for notifications, not queuing.",
                "Amazon MQ": "Amazon MQ is for message brokering, not simple queuing.",
                "Amazon EventBridge": "Amazon EventBridge is for event routing, not queuing."
            }
        },
        {
            "id": 25, "category": "Analytics", 
            "question": "A company needs a managed Elasticsearch cluster for log analytics. Which service?", 
            "options": ["Amazon Redshift", "Amazon OpenSearch Service", "Amazon Athena", "AWS Glue"], 
            "answer": "Amazon OpenSearch Service", 
            "definition": "Amazon OpenSearch Service provides a managed Elasticsearch cluster for log analytics.", 
            "incorrect_explanations": {
                "Amazon Redshift": "Amazon Redshift is for data warehousing, not log analytics.",
                "Amazon Athena": "Amazon Athena is for S3 queries, not Elasticsearch.",
                "AWS Glue": "AWS Glue is for ETL, not log analytics."
            }
        },
        {
            "id": 26, "category": "Analytics", 
            "question": "You need to process large-scale data with Hadoop. Which service is best?", 
            "options": ["Amazon Athena", "Amazon EMR", "Amazon Kinesis", "Amazon QuickSight"], 
            "answer": "Amazon EMR", 
            "definition": "Amazon EMR is a managed Hadoop framework for large-scale data processing.", 
            "incorrect_explanations": {
                "Amazon Athena": "Amazon Athena is for SQL queries, not Hadoop processing.",
                "Amazon Kinesis": "Amazon Kinesis is for streaming, not Hadoop.",
                "Amazon QuickSight": "Amazon QuickSight is for visualization, not data processing."
            }
        },
        {
            "id": 27, "category": "Analytics", 
            "question": "Which service is best for subscribing to external data feeds?", 
            "options": ["AWS Data Exchange", "Amazon Kinesis", "AWS Glue", "Amazon Redshift"], 
            "answer": "AWS Data Exchange", 
            "definition": "AWS Data Exchange allows subscribing to external data feeds in AWS.", 
            "incorrect_explanations": {
                "Amazon Kinesis": "Amazon Kinesis is for streaming, not external data feeds.",
                "AWS Glue": "AWS Glue is for ETL, not data subscriptions.",
                "Amazon Redshift": "Amazon Redshift is for data warehousing, not data feeds."
            }
        },
        {
            "id": 28, "category": "Analytics", 
            "question": "You need to analyze data in a data warehouse with high performance. Which service?", 
            "options": ["Amazon Athena", "Amazon Redshift", "AWS Glue", "Amazon Kinesis"], 
            "answer": "Amazon Redshift", 
            "definition": "Amazon Redshift provides high-performance data warehousing for analytics.", 
            "incorrect_explanations": {
                "Amazon Athena": "Amazon Athena is for S3 queries, not high-performance warehousing.",
                "AWS Glue": "AWS Glue is for ETL, not data warehousing.",
                "Amazon Kinesis": "Amazon Kinesis is for streaming, not warehousing."
            }
        },
        {
            "id": 29, "category": "Application Integration", 
            "question": "Which service supports fan-out messaging patterns?", 
            "options": ["Amazon SQS", "Amazon SNS", "Amazon MQ", "AWS Step Functions"], 
            "answer": "Amazon SNS", 
            "definition": "Amazon SNS supports fan-out messaging to multiple subscribers.", 
            "incorrect_explanations": {
                "Amazon SQS": "Amazon SQS is for queuing, not fan-out messaging.",
                "Amazon MQ": "Amazon MQ is for message brokering, not fan-out.",
                "AWS Step Functions": "AWS Step Functions is for workflows, not messaging."
            }
        },
        {
            "id": 30, "category": "Application Integration", 
            "question": "You need to coordinate microservices in a serverless application. Which service?", 
            "options": ["Amazon EventBridge", "AWS Step Functions", "Amazon SQS", "Amazon SNS"], 
            "answer": "AWS Step Functions", 
            "definition": "AWS Step Functions coordinates microservices in serverless applications.", 
            "incorrect_explanations": {
                "Amazon EventBridge": "Amazon EventBridge is for event routing, not microservice coordination.",
                "Amazon SQS": "Amazon SQS is for queuing, not coordination.",
                "Amazon SNS": "Amazon SNS is for notifications, not microservice workflows."
            }
        },
        {
            "id": 31, "category": "Analytics", 
            "question": "Which service is best for building a data lake on AWS?", 
            "options": ["Amazon S3", "Amazon Redshift", "Amazon Athena", "AWS Glue"], 
            "answer": "Amazon S3", 
            "definition": "Amazon S3 is the foundation for building scalable data lakes on AWS.", 
            "incorrect_explanations": {
                "Amazon Redshift": "Amazon Redshift is for data warehousing, not data lakes.",
                "Amazon Athena": "Amazon Athena queries data lakes but doesn’t store them.",
                "AWS Glue": "AWS Glue manages data lake metadata, not the storage layer."
            }
        },
        {
            "id": 32, "category": "Analytics", 
            "question": "You need to preprocess streaming data before analysis. Which service is best?", 
            "options": ["Amazon Kinesis Data Analytics", "Amazon Kinesis Firehose", "AWS Glue", "Amazon EMR"], 
            "answer": "Amazon Kinesis Firehose", 
            "definition": "Amazon Kinesis Firehose preprocesses and delivers streaming data for analysis.", 
            "incorrect_explanations": {
                "Amazon Kinesis Data Analytics": "Amazon Kinesis Data Analytics is for real-time analysis, not preprocessing.",
                "AWS Glue": "AWS Glue is for ETL, not streaming preprocessing.",
                "Amazon EMR": "Amazon EMR is for big data processing, not streaming."
            }
        },
        {
            "id": 33, "category": "Analytics", 
            "question": "Which service provides a serverless data warehouse for analytics?", 
            "options": ["Amazon Redshift", "Amazon Athena", "AWS Glue", "Amazon QuickSight"], 
            "answer": "Amazon Athena", 
            "definition": "Amazon Athena provides serverless querying for data warehouse-like analytics.", 
            "incorrect_explanations": {
                "Amazon Redshift": "Amazon Redshift is a managed data warehouse, not serverless.",
                "AWS Glue": "AWS Glue is for ETL, not a data warehouse.",
                "Amazon QuickSight": "Amazon QuickSight is for visualization, not a data warehouse."
            }
        },
        {
            "id": 34, "category": "Analytics", 
            "question": "You need to monitor and visualize real-time metrics from AWS services. Which service?", 
            "options": ["Amazon QuickSight", "Amazon CloudWatch", "Amazon OpenSearch Service", "AWS Glue"], 
            "answer": "Amazon CloudWatch", 
            "definition": "Amazon CloudWatch monitors and visualizes real-time metrics from AWS services.", 
            "incorrect_explanations": {
                "Amazon QuickSight": "Amazon QuickSight is for business intelligence, not real-time metrics.",
                "Amazon OpenSearch Service": "Amazon OpenSearch Service is for log analytics, not metrics.",
                "AWS Glue": "AWS Glue is for ETL, not monitoring."
            }
        },
        {
            "id": 35, "category": "Application Integration", 
            "question": "Which service is best for building event-driven architectures?", 
            "options": ["Amazon SNS", "Amazon SQS", "Amazon EventBridge", "AWS Step Functions"], 
            "answer": "Amazon EventBridge", 
            "definition": "Amazon EventBridge is designed for building event-driven architectures.", 
            "incorrect_explanations": {
                "Amazon SNS": "Amazon SNS is for notifications, not full event-driven architectures.",
                "Amazon SQS": "Amazon SQS is for queuing, not event-driven systems.",
                "AWS Step Functions": "AWS Step Functions is for workflows, not event-driven architectures."
            }
        },
        {
            "id": 36, "category": "Application Integration", 
            "question": "You need a FIFO queue for ordered message processing. Which service?", 
            "options": ["Amazon SNS", "Amazon SQS", "Amazon MQ", "Amazon EventBridge"], 
            "answer": "Amazon SQS", 
            "definition": "Amazon SQS supports FIFO queues for ordered message processing.", 
            "incorrect_explanations": {
                "Amazon SNS": "Amazon SNS is for notifications, not FIFO queuing.",
                "Amazon MQ": "Amazon MQ supports ordered messaging but is more complex.",
                "Amazon EventBridge": "Amazon EventBridge is for event routing, not queuing."
            }
        },
        {
            "id": 37, "category": "Analytics", 
            "question": "Which service is best for querying external data sources with Redshift?", 
            "options": ["Amazon Redshift Spectrum", "Amazon Athena", "AWS Glue", "Amazon Kinesis"], 
            "answer": "Amazon Redshift Spectrum", 
            "definition": "Amazon Redshift Spectrum queries external data sources with Redshift.", 
            "incorrect_explanations": {
                "Amazon Athena": "Amazon Athena queries S3, not integrated with Redshift.",
                "AWS Glue": "AWS Glue is for ETL, not querying with Redshift.",
                "Amazon Kinesis": "Amazon Kinesis is for streaming, not querying."
            }
        },
        {
            "id": 38, "category": "Analytics", 
            "question": "You need to automate data cataloging for a data lake. Which service?", 
            "options": ["AWS Glue Data Catalog", "Amazon S3", "Amazon Redshift", "Amazon QuickSight"], 
            "answer": "AWS Glue Data Catalog", 
            "definition": "AWS Glue Data Catalog automates metadata cataloging for data lakes.", 
            "incorrect_explanations": {
                "Amazon S3": "Amazon S3 is for storage, not cataloging.",
                "Amazon Redshift": "Amazon Redshift is for data warehousing, not cataloging.",
                "Amazon QuickSight": "Amazon QuickSight is for visualization, not cataloging."
            }
        },
        {
            "id": 39, "category": "Analytics", 
            "question": "Which service provides a managed Kafka cluster for streaming?", 
            "options": ["Amazon Kinesis", "Amazon MSK", "Amazon EMR", "AWS Glue"], 
            "answer": "Amazon MSK", 
            "definition": "Amazon MSK provides a managed Kafka cluster for streaming data.", 
            "incorrect_explanations": {
                "Amazon Kinesis": "Amazon Kinesis is a different streaming platform, not Kafka.",
                "Amazon EMR": "Amazon EMR supports Kafka but is not managed specifically for it.",
                "AWS Glue": "AWS Glue is for ETL, not streaming."
            }
        },
        {
            "id": 40, "category": "Analytics", 
            "question": "You need to create a dashboard with embedded analytics. Which service?", 
            "options": ["Amazon QuickSight", "Amazon OpenSearch Service", "Amazon Redshift", "AWS Glue"], 
            "answer": "Amazon QuickSight", 
            "definition": "Amazon QuickSight supports embedded analytics for dashboards.", 
            "incorrect_explanations": {
                "Amazon OpenSearch Service": "Amazon OpenSearch Service is for log analytics, not embedded dashboards.",
                "Amazon Redshift": "Amazon Redshift is for data warehousing, not dashboards.",
                "AWS Glue": "AWS Glue is for ETL, not analytics dashboards."
            }
        },
        {
            "id": 41, "category": "Application Integration", 
            "question": "A company wants to send email notifications to multiple subscribers when an event occurs. Which service is best?", 
            "options": ["Amazon SQS", "Amazon SNS", "Amazon EventBridge", "AWS Step Functions"], 
            "answer": "Amazon SNS", 
            "definition": "Amazon SNS is a pub/sub messaging service for sending notifications, such as emails, to multiple subscribers.", 
            "incorrect_explanations": {
                "Amazon SQS": "Amazon SQS is for queuing messages, not sending notifications.",
                "Amazon EventBridge": "Amazon EventBridge is for event routing, not direct notification delivery.",
                "AWS Step Functions": "AWS Step Functions is for workflows, not notifications."
            }
        },
        {
            "id": 42, "category": "Application Integration", 
            "question": "An application needs to decouple components by queuing messages. Which service should you use?", 
            "options": ["Amazon SNS", "Amazon SQS", "Amazon EventBridge", "AWS Step Functions"], 
            "answer": "Amazon SQS", 
            "definition": "Amazon SQS is a message queuing service that decouples application components by storing messages.", 
            "incorrect_explanations": {
                "Amazon SNS": "Amazon SNS is for notifications, not queuing.",
                "Amazon EventBridge": "Amazon EventBridge is for event routing, not message queuing.",
                "AWS Step Functions": "AWS Step Functions is for workflows, not queuing."
            }
        },
        {
            "id": 43, "category": "Application Integration", 
            "question": "You need to coordinate a multi-step workflow involving Lambda and ECS. Which service is appropriate?", 
            "options": ["Amazon EventBridge", "Amazon SNS", "AWS Step Functions", "Amazon SQS"], 
            "answer": "AWS Step Functions", 
            "definition": "AWS Step Functions is a serverless orchestration service for coordinating multi-step workflows.", 
            "incorrect_explanations": {
                "Amazon EventBridge": "Amazon EventBridge is for event routing, not workflow orchestration.",
                "Amazon SNS": "Amazon SNS is for notifications, not workflow coordination.",
                "Amazon SQS": "Amazon SQS is for queuing, not managing workflows."
            }
        },
        {
            "id": 44, "category": "Business Productivity", 
            "question": "A company wants to set up a scalable customer support call center. Which service should they use?", 
            "options": ["Amazon Connect", "Amazon SES", "AWS Step Functions", "Amazon SNS"], 
            "answer": "Amazon Connect", 
            "definition": "Amazon Connect is a cloud-based contact center service for scalable customer support.", 
            "incorrect_explanations": {
                "Amazon SES": "Amazon SES is for email sending, not call centers.",
                "AWS Step Functions": "AWS Step Functions is for workflows, not customer support.",
                "Amazon SNS": "Amazon SNS is for notifications, not call center operations."
            }
        },
        {
            "id": 45, "category": "Business Productivity", 
            "question": "An application needs to send transactional emails to customers. Which AWS service is best?", 
            "options": ["Amazon Connect", "Amazon SES", "Amazon SQS", "AWS EventBridge"], 
            "answer": "Amazon SES", 
            "definition": "Amazon SES is a cost-effective email service for sending transactional emails.", 
            "incorrect_explanations": {
                "Amazon Connect": "Amazon Connect is for contact centers, not email sending.",
                "Amazon SQS": "Amazon SQS is for queuing, not email delivery.",
                "AWS EventBridge": "AWS EventBridge is for event routing, not email sending."
            }
        },
        {
            "id": 46, "category": "Compute", 
            "question": "You need to run batch jobs for data processing across multiple compute resources. Which service should you use?", 
            "options": ["AWS Batch", "Amazon EC2", "AWS Elastic Beanstalk", "Amazon Lightsail"], 
            "answer": "AWS Batch", 
            "definition": "AWS Batch enables the execution of batch computing jobs across multiple resources.", 
            "incorrect_explanations": {
                "Amazon EC2": "Amazon EC2 provides virtual servers but requires manual batch job management.",
                "AWS Elastic Beanstalk": "AWS Elastic Beanstalk is for web applications, not batch processing.",
                "Amazon Lightsail": "Amazon Lightsail is for simple virtual servers, not batch jobs."
            }
        },
        {
            "id": 47, "category": "Compute", 
            "question": "A company needs full control over virtual servers to host a custom application. Which service is best?", 
            "options": ["AWS Elastic Beanstalk", "Amazon EC2", "Amazon Lightsail", "AWS Outposts"], 
            "answer": "Amazon EC2", 
            "definition": "Amazon EC2 provides resizable virtual servers with full control for hosting applications.", 
            "incorrect_explanations": {
                "AWS Elastic Beanstalk": "AWS Elastic Beanstalk automates deployment, limiting server control.",
                "Amazon Lightsail": "Amazon Lightsail offers simplified servers with less flexibility.",
                "AWS Outposts": "AWS Outposts is for on-premises infrastructure, not general hosting."
            }
        },
        {
            "id": 48, "category": "Compute", 
            "question": "A developer wants to deploy a web application without managing infrastructure. Which service is ideal?", 
            "options": ["Amazon EC2", "AWS Elastic Beanstalk", "Amazon Lightsail", "AWS Wavelength"], 
            "answer": "AWS Elastic Beanstalk", 
            "definition": "AWS Elastic Beanstalk automates the deployment and scaling of web applications.", 
            "incorrect_explanations": {
                "Amazon EC2": "Amazon EC2 requires manual server management.",
                "Amazon Lightsail": "Amazon Lightsail is for simple servers, not fully managed web apps.",
                "AWS Wavelength": "AWS Wavelength is for 5G edge computing, not web app deployment."
            }
        },
        {
            "id": 49, "category": "Compute", 
            "question": "A small business needs a low-cost, easy-to-use virtual server for a website. Which service should they choose?", 
            "options": ["Amazon EC2", "Amazon Lightsail", "AWS Elastic Beanstalk", "AWS Local Zones"], 
            "answer": "Amazon Lightsail", 
            "definition": "Amazon Lightsail provides low-cost, easy-to-use virtual servers for simple workloads.", 
            "incorrect_explanations": {
                "Amazon EC2": "Amazon EC2 is more complex and costly for simple needs.",
                "AWS Elastic Beanstalk": "AWS Elastic Beanstalk is for web apps, not basic servers.",
                "AWS Local Zones": "AWS Local Zones are for low-latency compute, not general servers."
            }
        },
        {
            "id": 50, "category": "Compute", 
            "question": "A gaming company needs low-latency compute closer to users in a city. Which service is appropriate?", 
            "options": ["AWS Local Zones", "AWS Outposts", "AWS Wavelength", "Amazon EC2"], 
            "answer": "AWS Local Zones", 
            "definition": "AWS Local Zones extend AWS compute to metropolitan areas for low-latency applications.", 
            "incorrect_explanations": {
                "AWS Outposts": "AWS Outposts is for on-premises infrastructure, not city-specific latency.",
                "AWS Wavelength": "AWS Wavelength is for 5G edge computing, not general low-latency compute.",
                "Amazon EC2": "Amazon EC2 is region-based, not optimized for city-specific latency."
            }
        },
        {
            "id": 51, "category": "Compute", 
            "question": "A company wants to run AWS services in their on-premises data center. Which service enables this?", 
            "options": ["AWS Local Zones", "AWS Outposts", "AWS Wavelength", "Amazon Lightsail"], 
            "answer": "AWS Outposts", 
            "definition": "AWS Outposts brings AWS services and infrastructure to on-premises data centers.", 
            "incorrect_explanations": {
                "AWS Local Zones": "AWS Local Zones are for low-latency compute in cities, not on-premises.",
                "AWS Wavelength": "AWS Wavelength is for 5G edge computing, not on-premises infrastructure.",
                "Amazon Lightsail": "Amazon Lightsail is for simple cloud servers, not on-premises solutions."
            }
        },
        {
            "id": 52, "category": "Compute", 
            "question": "An application requires ultra-low latency for 5G mobile users. Which service should be used?", 
            "options": ["AWS Local Zones", "AWS Outposts", "AWS Wavelength", "Amazon EC2"], 
            "answer": "AWS Wavelength", 
            "definition": "AWS Wavelength embeds AWS compute inside 5G networks for ultra-low latency.", 
            "incorrect_explanations": {
                "AWS Local Zones": "AWS Local Zones provide low latency in cities, not for 5G networks.",
                "AWS Outposts": "AWS Outposts is for on-premises infrastructure, not 5G edge computing.",
                "Amazon EC2": "Amazon EC2 is not optimized for 5G-specific latency requirements."
            }
        },
        {
            "id": 53, "category": "Containers", 
            "question": "You need to store and manage Docker container images. Which AWS service is best?", 
            "options": ["Amazon ECS", "Amazon ECR", "Amazon EKS", "AWS Fargate"], 
            "answer": "Amazon ECR", 
            "definition": "Amazon ECR is a managed Docker container registry for storing and deploying images.", 
            "incorrect_explanations": {
                "Amazon ECS": "Amazon ECS is for container orchestration, not image storage.",
                "Amazon EKS": "Amazon EKS is for Kubernetes orchestration, not image management.",
                "AWS Fargate": "AWS Fargate is for serverless container execution, not image storage."
            }
        },
        {
            "id": 54, "category": "Containers", 
            "question": "A company wants to orchestrate Docker containers using an AWS-native service. Which service should they use?", 
            "options": ["Amazon ECR", "Amazon ECS", "Amazon EKS", "AWS Fargate"], 
            "answer": "Amazon ECS", 
            "definition": "Amazon ECS is a managed container orchestration service for Docker containers.", 
            "incorrect_explanations": {
                "Amazon ECR": "Amazon ECR is for container image storage, not orchestration.",
                "Amazon EKS": "Amazon EKS is for Kubernetes, not AWS-native orchestration.",
                "AWS Fargate": "AWS Fargate is for serverless containers, not full orchestration."
            }
        },
        {
            "id": 55, "category": "Containers", 
            "question": "A team uses Kubernetes to manage containers and wants a managed solution. Which AWS service is ideal?", 
            "options": ["Amazon ECS", "Amazon EKS", "Amazon ECR", "AWS Fargate"], 
            "answer": "Amazon EKS", 
            "definition": "Amazon EKS is a managed Kubernetes service for containerized applications.", 
            "incorrect_explanations": {
                "Amazon ECS": "Amazon ECS is AWS-native, not Kubernetes-based.",
                "Amazon ECR": "Amazon ECR is for image storage, not Kubernetes management.",
                "AWS Fargate": "AWS Fargate supports serverless containers, not Kubernetes orchestration."
            }
        },
        {
            "id": 56, "category": "Cost Management", 
            "question": "A company needs to customize billing reports for different departments. Which service should they use?", 
            "options": ["AWS Budgets", "AWS Billing Conductor", "AWS Cost Explorer", "AWS Cost and Usage Report"], 
            "answer": "AWS Billing Conductor", 
            "definition": "AWS Billing Conductor enables customizable billing reports for departments.", 
            "incorrect_explanations": {
                "AWS Budgets": "AWS Budgets is for setting spending limits, not customizing reports.",
                "AWS Cost Explorer": "AWS Cost Explorer is for visualizing costs, not departmental billing.",
                "AWS Cost and Usage Report": "AWS Cost and Usage Report provides raw billing data, not customized reports."
            }
        },
        {
            "id": 57, "category": "Cost Management", 
            "question": "You want to set a spending limit and receive alerts when costs exceed it. Which service is best?", 
            "options": ["AWS Cost Explorer", "AWS Budgets", "AWS Cost and Usage Report", "AWS Marketplace"], 
            "answer": "AWS Budgets", 
            "definition": "AWS Budgets allows you to set spending limits and receive alerts when costs exceed thresholds.", 
            "incorrect_explanations": {
                "AWS Cost Explorer": "AWS Cost Explorer is for cost analysis, not setting budgets.",
                "AWS Cost and Usage Report": "AWS Cost and Usage Report provides billing data, not budget alerts.",
                "AWS Marketplace": "AWS Marketplace is for purchasing software, not budget management."
            }
        },
        {
            "id": 58, "category": "Cost Management", 
            "question": "A company needs detailed billing data for analysis in a third-party tool. Which service provides this?", 
            "options": ["AWS Cost Explorer", "AWS Cost and Usage Report", "AWS Budgets", "AWS Billing Conductor"], 
            "answer": "AWS Cost and Usage Report", 
            "definition": "AWS Cost and Usage Report provides detailed billing data for external analysis.", 
            "incorrect_explanations": {
                "AWS Cost Explorer": "AWS Cost Explorer is for visualization, not raw data export.",
                "AWS Budgets": "AWS Budgets is for setting limits, not exporting billing data.",
                "AWS Billing Conductor": "AWS Billing Conductor is for customized billing, not raw data."
            }
        },
        {
            "id": 59, "category": "Cost Management", 
            "question": "You need to visualize AWS spending trends over time. Which service should you use?", 
            "options": ["AWS Budgets", "AWS Cost Explorer", "AWS Cost and Usage Report", "AWS Marketplace"], 
            "answer": "AWS Cost Explorer", 
            "definition": "AWS Cost Explorer provides visualizations of AWS spending trends over time.", 
            "incorrect_explanations": {
                "AWS Budgets": "AWS Budgets is for setting limits, not visualizing trends.",
                "AWS Cost and Usage Report": "AWS Cost and Usage Report provides raw data, not visualizations.",
                "AWS Marketplace": "AWS Marketplace is for software purchases, not cost visualization."
            }
        },
        {
            "id": 60, "category": "Cost Management", 
            "question": "A company wants to buy and deploy a third-party analytics tool on AWS. Which service enables this?", 
            "options": ["AWS Budgets", "AWS Cost Explorer", "AWS Marketplace", "AWS Cost and Usage Report"], 
            "answer": "AWS Marketplace", 
            "definition": "AWS Marketplace is a catalog for purchasing and deploying third-party software.", 
            "incorrect_explanations": {
                "AWS Budgets": "AWS Budgets is for cost management, not software purchasing.",
                "AWS Cost Explorer": "AWS Cost Explorer is for cost visualization, not software deployment.",
                "AWS Cost and Usage Report": "AWS Cost and Usage Report is for billing data, not software purchasing."
            }
        },
        {
            "id": 61, "category": "Customer Engagement", 
            "question": "A startup needs AWS credits and guidance to grow. Which program should they join?", 
            "options": ["AWS IQ", "AWS Activate for Startups", "AWS Managed Services", "AWS Support"], 
            "answer": "AWS Activate for Startups", 
            "definition": "AWS Activate for Startups provides credits and resources for startup growth.", 
            "incorrect_explanations": {
                "AWS IQ": "AWS IQ connects companies with experts, not startup programs.",
                "AWS Managed Services": "AWS Managed Services is for infrastructure management, not startup support.",
                "AWS Support": "AWS Support provides technical assistance, not startup credits."
            }
        },
        {
            "id": 62, "category": "Customer Engagement", 
            "question": "A company needs to hire an AWS expert for a migration project. Which service connects them to professionals?", 
            "options": ["AWS IQ", "AWS Activate for Startups", "AWS Managed Services", "AWS Support"], 
            "answer": "AWS IQ", 
            "definition": "AWS IQ connects customers with certified AWS experts for project-based work.", 
            "incorrect_explanations": {
                "AWS Activate for Startups": "AWS Activate is for startup growth, not hiring experts.",
                "AWS Managed Services": "AWS Managed Services manages infrastructure, not expert hiring.",
                "AWS Support": "AWS Support provides technical help, not expert connections."
            }
        },
        {
            "id": 63, "category": "Customer Engagement", 
            "question": "A company wants AWS to manage their cloud infrastructure operations. Which service provides this?", 
            "options": ["AWS IQ", "AWS Managed Services", "AWS Activate for Startups", "AWS Support"], 
            "answer": "AWS Managed Services", 
            "definition": "AWS Managed Services automates and manages cloud infrastructure operations.", 
            "incorrect_explanations": {
                "AWS IQ": "AWS IQ is for hiring experts, not infrastructure management.",
                "AWS Activate for Startups": "AWS Activate is for startup growth, not operations management.",
                "AWS Support": "AWS Support provides technical assistance, not full operations management."
            }
        },
        {
            "id": 64, "category": "Customer Engagement", 
            "question": "A company needs 24/7 technical support for AWS issues. Which service should they use?", 
            "options": ["AWS IQ", "AWS Managed Services", "AWS Support", "AWS Activate for Startups"], 
            "answer": "AWS Support", 
            "definition": "AWS Support provides 24/7 technical assistance for AWS-related issues.", 
            "incorrect_explanations": {
                "AWS IQ": "AWS IQ is for hiring experts, not ongoing support.",
                "AWS Managed Services": "AWS Managed Services manages infrastructure, not general support.",
                "AWS Activate for Startups": "AWS Activate is for startup growth, not technical support."
            }
        },
        {
            "id": 65, "category": "Database", 
            "question": "You need a high-performance relational database compatible with MySQL. Which service is best?", 
            "options": ["Amazon RDS", "Amazon Aurora", "Amazon DynamoDB", "Amazon MemoryDB for Redis"], 
            "answer": "Amazon Aurora", 
            "definition": "Amazon Aurora is a high-performance relational database compatible with MySQL and PostgreSQL.", 
            "incorrect_explanations": {
                "Amazon RDS": "Amazon RDS supports MySQL but is less performant than Aurora.",
                "Amazon DynamoDB": "Amazon DynamoDB is a NoSQL database, not relational.",
                "Amazon MemoryDB for Redis": "Amazon MemoryDB is an in-memory database, not relational."
            }
        },
        {
            "id": 66, "category": "Database", 
            "question": "An application requires a highly scalable NoSQL database for key-value data. Which service should you use?", 
            "options": ["Amazon Aurora", "Amazon DynamoDB", "Amazon MemoryDB for Redis", "Amazon Neptune"], 
            "answer": "Amazon DynamoDB", 
            "definition": "Amazon DynamoDB is a managed NoSQL database for key-value and document data.", 
            "incorrect_explanations": {
                "Amazon Aurora": "Amazon Aurora is a relational database, not NoSQL.",
                "Amazon MemoryDB for Redis": "Amazon MemoryDB is in-memory, not optimized for general NoSQL.",
                "Amazon Neptune": "Amazon Neptune is a graph database, not key-value."
            }
        },
        {
            "id": 67, "category": "Database", 
            "question": "A company needs an in-memory database for sub-millisecond latency. Which service is appropriate?", 
            "options": ["Amazon DynamoDB", "Amazon MemoryDB for Redis", "Amazon Aurora", "Amazon RDS"], 
            "answer": "Amazon MemoryDB for Redis", 
            "definition": "Amazon MemoryDB for Redis is an in-memory database for sub-millisecond latency.", 
            "incorrect_explanations": {
                "Amazon DynamoDB": "Amazon DynamoDB is a NoSQL database, not in-memory.",
                "Amazon Aurora": "Amazon Aurora is a relational database, not in-memory.",
                "Amazon RDS": "Amazon RDS is disk-based, not optimized for sub-millisecond latency."
            }
        },
        {
            "id": 68, "category": "Database", 
            "question": "An application needs to query complex relationships in a social network. Which database is best?", 
            "options": ["Amazon Aurora", "Amazon DynamoDB", "Amazon Neptune", "Amazon RDS"], 
            "answer": "Amazon Neptune", 
            "definition": "Amazon Neptune is a managed graph database optimized for complex relationships.", 
            "incorrect_explanations": {
                "Amazon Aurora": "Amazon Aurora is a relational database, not suited for graph queries.",
                "Amazon DynamoDB": "Amazon DynamoDB is for key-value data, not complex relationships.",
                "Amazon RDS": "Amazon RDS is for relational data, not graph-based queries."
            }
        },
        {
            "id": 69, "category": "Database", 
            "question": "You need a managed relational database for a SQL-based application. Which service should you use?", 
            "options": ["Amazon Aurora", "Amazon RDS", "Amazon DynamoDB", "Amazon MemoryDB for Redis"], 
            "answer": "Amazon RDS", 
            "definition": "Amazon RDS is a managed relational database service supporting SQL engines.", 
            "incorrect_explanations": {
                "Amazon Aurora": "Amazon Aurora is a specific RDS engine, not the general service.",
                "Amazon DynamoDB": "Amazon DynamoDB is NoSQL, not relational.",
                "Amazon MemoryDB for Redis": "Amazon MemoryDB is in-memory, not relational."
            }
        },
        {
            "id": 70, "category": "Developer Tools", 
            "question": "You need to manage and deploy application configurations dynamically. Which service is best?", 
            "options": ["AWS AppConfig", "AWS CLI", "AWS Cloud9", "AWS CloudShell"], 
            "answer": "AWS AppConfig", 
            "definition": "AWS AppConfig enables dynamic management and deployment of configurations.", 
            "incorrect_explanations": {
                "AWS CLI": "AWS CLI is for command-line management, not configuration deployment.",
                "AWS Cloud9": "AWS Cloud9 is a cloud IDE, not for configurations.",
                "AWS CloudShell": "AWS CloudShell is a browser-based shell, not for configurations."
            }
        },
        {
            "id": 71, "category": "Developer Tools", 
            "question": "A developer wants to automate AWS resource management via scripts. Which tool should they use?", 
            "options": ["AWS AppConfig", "AWS CLI", "AWS Cloud9", "AWS CloudShell"], 
            "answer": "AWS CLI", 
            "definition": "AWS CLI is a command-line tool for automating AWS resource management.", 
            "incorrect_explanations": {
                "AWS AppConfig": "AWS AppConfig is for application configurations, not resource management.",
                "AWS Cloud9": "AWS Cloud9 is an IDE, not for scripting automation.",
                "AWS CloudShell": "AWS CloudShell is a browser-based shell, less suited for scripting."
            }
        },
        {
            "id": 72, "category": "Developer Tools", 
            "question": "A team needs a cloud-based IDE for collaborative coding. Which service should they use?", 
            "options": ["AWS CloudShell", "AWS Cloud9", "AWS CLI", "AWS CodeArtifact"], 
            "answer": "AWS Cloud9", 
            "definition": "AWS Cloud9 is a cloud-based IDE for collaborative coding and debugging.", 
            "incorrect_explanations": {
                "AWS CloudShell": "AWS CloudShell is a terminal, not an IDE.",
                "AWS CLI": "AWS CLI is for command-line management, not coding.",
                "AWS CodeArtifact": "AWS CodeArtifact is for dependency management, not coding."
            }
        },
        {
            "id": 73, "category": "Developer Tools", 
            "question": "You need a browser-based terminal to run AWS CLI commands. Which service is ideal?", 
            "options": ["AWS Cloud9", "AWS CloudShell", "AWS CodeBuild", "AWS CodeCommit"], 
            "answer": "AWS CloudShell", 
            "definition": "AWS CloudShell is a browser-based terminal for running AWS CLI commands.", 
            "incorrect_explanations": {
                "AWS Cloud9": "AWS Cloud9 is an IDE, not a terminal.",
                "AWS CodeBuild": "AWS CodeBuild is for building code, not running CLI commands.",
                "AWS CodeCommit": "AWS CodeCommit is for source control, not CLI execution."
            }
        },
        {
            "id": 74, "category": "Developer Tools", 
            "question": "A company needs to store and manage software dependencies. Which service should they use?", 
            "options": ["AWS CodeArtifact", "AWS CodeBuild", "AWS CodeCommit", "AWS CodeDeploy"], 
            "answer": "AWS CodeArtifact", 
            "definition": "AWS CodeArtifact is a managed artifact repository for software dependencies.", 
            "incorrect_explanations": {
                "AWS CodeBuild": "AWS CodeBuild is for building code, not dependency storage.",
                "AWS CodeCommit": "AWS CodeCommit is for source control, not dependencies.",
                "AWS CodeDeploy": "AWS CodeDeploy is for deployment, not dependency management."
            }
        },
        {
            "id": 75, "category": "Developer Tools", 
            "question": "You need to automate code compilation and testing. Which service is best?", 
            "options": ["AWS CodeCommit", "AWS CodeBuild", "AWS CodeDeploy", "AWS CodePipeline"], 
            "answer": "AWS CodeBuild", 
            "definition": "AWS CodeBuild is a managed build service for automating code compilation and testing.", 
            "incorrect_explanations": {
                "AWS CodeCommit": "AWS CodeCommit is for source control, not compilation.",
                "AWS CodeDeploy": "AWS CodeDeploy is for deployment, not building.",
                "AWS CodePipeline": "AWS CodePipeline is for CI/CD pipelines, not direct compilation."
            }
        },
        {
            "id": 76, "category": "Developer Tools", 
            "question": "A team needs a Git-based source control system on AWS. Which service should they use?", 
            "options": ["AWS CodeBuild", "AWS CodeCommit", "AWS CodeDeploy", "AWS CodePipeline"], 
            "answer": "AWS CodeCommit", 
            "definition": "AWS CodeCommit is a Git-based source control service for code management.", 
            "incorrect_explanations": {
                "AWS CodeBuild": "AWS CodeBuild is for building code, not source control.",
                "AWS CodeDeploy": "AWS CodeDeploy is for deployment, not source control.",
                "AWS CodePipeline": "AWS CodePipeline is for CI/CD, not source control."
            }
        },
        {
            "id": 77, "category": "Developer Tools", 
            "question": "You need to automate application deployments to EC2 instances. Which service is ideal?", 
            "options": ["AWS CodeBuild", "AWS CodeDeploy", "AWS CodeCommit", "AWS CodePipeline"], 
            "answer": "AWS CodeDeploy", 
            "definition": "AWS CodeDeploy automates application deployments to EC2 and other services.", 
            "incorrect_explanations": {
                "AWS CodeBuild": "AWS CodeBuild is for building code, not deployment.",
                "AWS CodeCommit": "AWS CodeCommit is for source control, not deployment.",
                "AWS CodePipeline": "AWS CodePipeline is for CI/CD pipelines, not direct deployment."
            }
        },
        {
            "id": 78, "category": "Developer Tools", 
            "question": "A company wants to automate the entire software release process. Which service should they use?", 
            "options": ["AWS CodeBuild", "AWS CodeDeploy", "AWS CodePipeline", "AWS CodeStar"], 
            "answer": "AWS CodePipeline", 
            "definition": "AWS CodePipeline is a CI/CD service for automating software release processes.", 
            "incorrect_explanations": {
                "AWS CodeBuild": "AWS CodeBuild is for building, not full release automation.",
                "AWS CodeDeploy": "AWS CodeDeploy is for deployment, not full CI/CD.",
                "AWS CodeStar": "AWS CodeStar is for project management, not full CI/CD automation."
            }
        },
        {
            "id": 79, "category": "Developer Tools", 
            "question": "A team needs a unified interface to manage software development projects. Which service is best?", 
            "options": ["AWS CodeStar", "AWS CodePipeline", "AWS CodeDeploy", "AWS X-Ray"], 
            "answer": "AWS CodeStar", 
            "definition": "AWS CodeStar provides a unified interface for managing software projects.", 
            "incorrect_explanations": {
                "AWS CodePipeline": "AWS CodePipeline is for CI/CD, not project management.",
                "AWS CodeDeploy": "AWS CodeDeploy is for deployment, not project management.",
                "AWS X-Ray": "AWS X-Ray is for tracing, not project management."
            }
        },
        {
            "id": 80, "category": "Developer Tools", 
            "question": "You need to trace and analyze performance issues in a distributed application. Which service should you use?", 
            "options": ["AWS CodeStar", "AWS X-Ray", "AWS CodeBuild", "AWS CodeCommit"], 
            "answer": "AWS X-Ray", 
            "definition": "AWS X-Ray traces and analyzes performance issues in distributed applications.", 
            "incorrect_explanations": {
                "AWS CodeStar": "AWS CodeStar is for project management, not tracing.",
                "AWS CodeBuild": "AWS CodeBuild is for building, not performance analysis.",
                "AWS CodeCommit": "AWS CodeCommit is for source control, not tracing."
            }
        },
        {
            "id": 81, "category": "Frontend Web and Mobile", 
            "question": "A developer needs to build and deploy a full-stack web application quickly. Which service is best?", 
            "options": ["AWS AppSync", "AWS Amplify", "AWS Device Farm", "Amazon API Gateway"], 
            "answer": "AWS Amplify", 
            "definition": "AWS Amplify simplifies building and deploying full-stack web and mobile applications.", 
            "incorrect_explanations": {
                "AWS AppSync": "AWS AppSync is for GraphQL APIs, not full-stack apps.",
                "AWS Device Farm": "AWS Device Farm is for device testing, not app development.",
                "Amazon API Gateway": "Amazon API Gateway is for APIs, not full-stack development."
            }
        },
        {
            "id": 82, "category": "Frontend Web and Mobile", 
            "question": "An application needs a managed GraphQL API for real-time data syncing. Which service should you use?", 
            "options": ["AWS Amplify", "AWS AppSync", "AWS Device Farm", "Amazon CloudFront"], 
            "answer": "AWS AppSync", 
            "definition": "AWS AppSync provides managed GraphQL APIs for real-time data syncing.", 
            "incorrect_explanations": {
                "AWS Amplify": "AWS Amplify is for full-stack apps, not specifically GraphQL APIs.",
                "AWS Device Farm": "AWS Device Farm is for device testing, not APIs.",
                "Amazon CloudFront": "Amazon CloudFront is for content delivery, not APIs."
            }
        },
        {
            "id": 83, "category": "Frontend Web and Mobile", 
            "question": "A company wants to test their mobile app on multiple real devices. Which service is ideal?", 
            "options": ["AWS Amplify", "AWS AppSync", "AWS Device Farm", "AWS AppConfig"], 
            "answer": "AWS Device Farm", 
            "definition": "AWS Device Farm enables testing mobile apps on a wide range of real devices.", 
            "incorrect_explanations": {
                "AWS Amplify": "AWS Amplify is for app development, not device testing.",
                "AWS AppSync": "AWS AppSync is for GraphQL APIs, not device testing.",
                "AWS AppConfig": "AWS AppConfig is for configurations, not device testing."
            }
        },
        {
            "id": 84, "category": "Storage", 
            "question": "You need to automate backups across multiple AWS services. Which service should you use?", 
            "options": ["Amazon EBS", "AWS Backup", "Amazon EFS", "Amazon S3"], 
            "answer": "AWS Backup", 
            "definition": "AWS Backup automates and centralizes backups across AWS services.", 
            "incorrect_explanations": {
                "Amazon EBS": "Amazon EBS provides block storage, not automated backups.",
                "Amazon EFS": "Amazon EFS is for file storage, not backup automation.",
                "Amazon S3": "Amazon S3 is for object storage, not centralized backups."
            }
        },
        {
            "id": 85, "category": "Storage", 
            "question": "An EC2 instance needs persistent block storage for a database. Which service is best?", 
            "options": ["Amazon EFS", "Amazon EBS", "Amazon S3", "AWS Storage Gateway"], 
            "answer": "Amazon EBS", 
            "definition": "Amazon EBS provides persistent block storage for EC2 instances, ideal for databases.", 
            "incorrect_explanations": {
                "Amazon EFS": "Amazon EFS is for shared file storage, not block storage.",
                "Amazon S3": "Amazon S3 is for object storage, not suitable for databases.",
                "AWS Storage Gateway": "AWS Storage Gateway connects on-premises to cloud storage, not for EC2."
            }
        },
        {
            "id": 86, "category": "Storage", 
            "question": "Multiple EC2 instances need shared file storage. Which service should you use?", 
            "options": ["Amazon EBS", "Amazon EFS", "Amazon S3", "Amazon FSx"], 
            "answer": "Amazon EFS", 
            "definition": "Amazon EFS provides shared file storage for multiple EC2 instances.", 
            "incorrect_explanations": {
                "Amazon EBS": "Amazon EBS is for block storage, not shared file storage.",
                "Amazon S3": "Amazon S3 is for object storage, not file storage.",
                "Amazon FSx": "Amazon FSx is for Windows-based file systems, not general file storage."
            }
        },
        {
            "id": 87, "category": "Storage", 
            "question": "A company needs a Windows-based file system for their applications. Which service is best?", 
            "options": ["Amazon EFS", "Amazon FSx", "Amazon EBS", "Amazon S3"], 
            "answer": "Amazon FSx", 
            "definition": "Amazon FSx provides fully managed Windows-based file systems.", 
            "incorrect_explanations": {
                "Amazon EFS": "Amazon EFS is for Linux-based file storage, not Windows.",
                "Amazon EBS": "Amazon EBS is for block storage, not file systems.",
                "Amazon S3": "Amazon S3 is for object storage, not Windows file systems."
            }
        },
        {
            "id": 88, "category": "Storage", 
            "question": "You need to store large amounts of unstructured data with high durability. Which service is best?", 
            "options": ["Amazon EBS", "Amazon EFS", "Amazon S3", "Amazon FSx"], 
            "answer": "Amazon S3", 
            "definition": "Amazon S3 is designed for storing large amounts of unstructured data with high durability.", 
            "incorrect_explanations": {
                "Amazon EBS": "Amazon EBS is for block storage, not unstructured data.",
                "Amazon EFS": "Amazon EFS is for file storage, not large-scale unstructured data.",
                "Amazon FSx": "Amazon FSx is for Windows file systems, not unstructured data."
            }
        },
        {
            "id": 89, "category": "Storage", 
            "question": "A company needs to connect on-premises storage to AWS cloud storage. Which service should they use?", 
            "options": ["Amazon EFS", "Amazon S3", "AWS Storage Gateway", "Amazon EBS"], 
            "answer": "AWS Storage Gateway", 
            "definition": "AWS Storage Gateway connects on-premises storage to AWS cloud storage.", 
            "incorrect_explanations": {
                "Amazon EFS": "Amazon EFS is for cloud-based file storage, not on-premises integration.",
                "Amazon S3": "Amazon S3 is for cloud storage, not on-premises connectivity.",
                "Amazon EBS": "Amazon EBS is for block storage, not on-premises integration."
            }
        },
        {
            "id": 90, "category": "Internet of Things", 
            "question": "You need to manage IoT devices securely at scale. Which service is best?", 
            "options": ["AWS IoT Core", "AWS IoT Device Defender", "AWS IoT Device Management", "AWS IoT Greengrass"], 
            "answer": "AWS IoT Device Management", 
            "definition": "AWS IoT Device Management enables secure management of IoT devices at scale.", 
            "incorrect_explanations": {
                "AWS IoT Core": "AWS IoT Core is for device connectivity, not management.",
                "AWS IoT Device Defender": "AWS IoT Device Defender is for security auditing, not device management.",
                "AWS IoT Greengrass": "AWS IoT Greengrass is for edge computing, not device management."
            }
        },
        {
            "id": 91, "category": "Internet of Things", 
            "question": "An application needs to process IoT data at the edge. Which service should you use?", 
            "options": ["AWS IoT Core", "AWS IoT Device Defender", "AWS IoT Device Management", "AWS IoT Greengrass"], 
            "answer": "AWS IoT Greengrass", 
            "definition": "AWS IoT Greengrass enables local processing of IoT data at the edge.", 
            "incorrect_explanations": {
                "AWS IoT Core": "AWS IoT Core is for cloud connectivity, not edge processing.",
                "AWS IoT Device Defender": "AWS IoT Device Defender is for security, not edge processing.",
                "AWS IoT Device Management": "AWS IoT Device Management is for device management, not edge processing."
            }
        },
        {
            "id": 92, "category": "Internet of Things", 
            "question": "You need to secure IoT devices and detect anomalies. Which service is best?", 
            "options": ["AWS IoT Core", "AWS IoT Device Defender", "AWS IoT Device Management", "AWS IoT Greengrass"], 
            "answer": "AWS IoT Device Defender", 
            "definition": "AWS IoT Device Defender secures IoT devices and detects anomalies.", 
            "incorrect_explanations": {
                "AWS IoT Core": "AWS IoT Core is for connectivity, not security auditing.",
                "AWS IoT Device Management": "AWS IoT Device Management is for device management, not security.",
                "AWS IoT Greengrass": "AWS IoT Greengrass is for edge computing, not security."
            }
        },
        {
            "id": 93, "category": "Internet of Things", 
            "question": "A company needs to connect IoT devices to AWS services securely. Which service should they use?", 
            "options": ["AWS IoT Core", "AWS IoT Device Defender", "AWS IoT Device Management", "AWS IoT Greengrass"], 
            "answer": "AWS IoT Core", 
            "definition": "AWS IoT Core connects IoT devices to AWS services securely.", 
            "incorrect_explanations": {
                "AWS IoT Device Defender": "AWS IoT Device Defender is for security auditing, not connectivity.",
                "AWS IoT Device Management": "AWS IoT Device Management is for device management, not connectivity.",
                "AWS IoT Greengrass": "AWS IoT Greengrass is for edge computing, not cloud connectivity."
            }
        },
        {
            "id": 94, "category": "Machine Learning", 
            "question": "You need to build and deploy machine learning models without managing infrastructure. Which service is best?", 
            "options": ["Amazon SageMaker", "AWS DeepLens", "AWS DeepRacer", "Amazon Lex"], 
            "answer": "Amazon SageMaker", 
            "definition": "Amazon SageMaker is a fully managed service for building and deploying ML models.", 
            "incorrect_explanations": {
                "AWS DeepLens": "AWS DeepLens is for deep learning on devices, not general ML.",
                "AWS DeepRacer": "AWS DeepRacer is for reinforcement learning education, not production ML.",
                "Amazon Lex": "Amazon Lex is for conversational agents, not general ML."
            }
        },
        {
            "id": 95, "category": "Machine Learning", 
            "question": "A company wants to create a chatbot for customer service. Which service should they use?", 
            "options": ["Amazon SageMaker", "Amazon Lex", "AWS DeepLens", "AWS DeepRacer"], 
            "answer": "Amazon Lex", 
            "definition": "Amazon Lex enables building conversational agents like chatbots.", 
            "incorrect_explanations": {
                "Amazon SageMaker": "Amazon SageMaker is for general ML, not specifically chatbots.",
                "AWS DeepLens": "AWS DeepLens is for deep learning on devices, not chatbots.",
                "AWS DeepRacer": "AWS DeepRacer is for reinforcement learning, not chatbots."
            }
        },
        {
            "id": 96, "category": "Machine Learning", 
            "question": "You need a camera for deep learning at the edge. Which service is best?", 
            "options": ["Amazon SageMaker", "AWS DeepLens", "Amazon Lex", "AWS DeepRacer"], 
            "answer": "AWS DeepLens", 
            "definition": "AWS DeepLens is a deep learning-enabled camera for edge computing.", 
            "incorrect_explanations": {
                "Amazon SageMaker": "Amazon SageMaker is for ML model building, not edge devices.",
                "Amazon Lex": "Amazon Lex is for chatbots, not edge computing.",
                "AWS DeepRacer": "AWS DeepRacer is for reinforcement learning, not edge cameras."
            }
        },
        {
            "id": 97, "category": "Machine Learning", 
            "question": "A team wants to learn reinforcement learning through a fun project. Which service is ideal?", 
            "options": ["Amazon SageMaker", "AWS DeepLens", "AWS DeepRacer", "Amazon Lex"], 
            "answer": "AWS DeepRacer", 
            "definition": "AWS DeepRacer is an educational platform for learning reinforcement learning.", 
            "incorrect_explanations": {
                "Amazon SageMaker": "Amazon SageMaker is for production ML, not educational projects.",
                "AWS DeepLens": "AWS DeepLens is for edge deep learning, not reinforcement learning.",
                "Amazon Lex": "Amazon Lex is for chatbots, not reinforcement learning."
            }
        },
        {
            "id": 98, "category": "Management and Governance", 
            "question": "You need to automate resource deployment using infrastructure as code. Which service is best?", 
            "options": ["AWS CloudFormation", "AWS CloudTrail", "AWS Config", "AWS Systems Manager"], 
            "answer": "AWS CloudFormation", 
            "definition": "AWS CloudFormation automates resource deployment using infrastructure as code.", 
            "incorrect_explanations": {
                "AWS CloudTrail": "AWS CloudTrail is for auditing, not resource deployment.",
                "AWS Config": "AWS Config is for compliance tracking, not deployment.",
                "AWS Systems Manager": "AWS Systems Manager is for operations, not infrastructure as code."
            }
        },
        {
            "id": 99, "category": "Management and Governance", 
            "question": "A company needs to track API calls for auditing. Which service should they use?", 
            "options": ["AWS CloudFormation", "AWS CloudTrail", "AWS Config", "AWS Trusted Advisor"], 
            "answer": "AWS CloudTrail", 
            "definition": "AWS CloudTrail records API calls for auditing and compliance.", 
            "incorrect_explanations": {
                "AWS CloudFormation": "AWS CloudFormation is for resource deployment, not auditing.",
                "AWS Config": "AWS Config tracks resource configurations, not API calls.",
                "AWS Trusted Advisor": "AWS Trusted Advisor provides recommendations, not API auditing."
            }
        },
        {
            "id": 100, "category": "Management and Governance", 
            "question": "You need to monitor resource configurations for compliance. Which service is best?", 
            "options": ["AWS CloudTrail", "AWS Config", "AWS CloudFormation", "AWS Systems Manager"], 
            "answer": "AWS Config", 
            "definition": "AWS Config monitors and tracks resource configurations for compliance.", 
            "incorrect_explanations": {
                "AWS CloudTrail": "AWS CloudTrail is for API auditing, not configuration tracking.",
                "AWS CloudFormation": "AWS CloudFormation is for deployment, not compliance.",
                "AWS Systems Manager": "AWS Systems Manager is for operations, not compliance tracking."
            }
        },
        {
            "id": 101, "category": "Management and Governance", 
            "question": "A company wants recommendations to optimize AWS resources. Which service should they use?", 
            "options": ["AWS Config", "AWS CloudTrail", "AWS Trusted Advisor", "AWS CloudFormation"], 
            "answer": "AWS Trusted Advisor", 
            "definition": "AWS Trusted Advisor provides recommendations to optimize AWS resources.", 
            "incorrect_explanations": {
                "AWS Config": "AWS Config is for compliance, not optimization recommendations.",
                "AWS CloudTrail": "AWS CloudTrail is for auditing, not optimization.",
                "AWS CloudFormation": "AWS CloudFormation is for deployment, not recommendations."
            }
        },
        {
            "id": 102, "category": "Management and Governance", 
            "question": "You need to manage and automate operational tasks across AWS resources. Which service is best?", 
            "options": ["AWS CloudFormation", "AWS Config", "AWS Systems Manager", "AWS CloudTrail"], 
            "answer": "AWS Systems Manager", 
            "definition": "AWS Systems Manager automates and manages operational tasks across AWS resources.", 
            "incorrect_explanations": {
                "AWS CloudFormation": "AWS CloudFormation is for deployment, not operational tasks.",
                "AWS Config": "AWS Config is for compliance, not task automation.",
                "AWS CloudTrail": "AWS CloudTrail is for auditing, not task management."
            }
        },
        {
            "id": 103, "category": "Media Services", 
            "question": "You need to transcode video files for streaming. Which service is best?", 
            "options": ["AWS Elemental MediaConvert", "AWS Elemental MediaLive", "AWS Elemental MediaPackage", "AWS Elemental MediaTailor"], 
            "answer": "AWS Elemental MediaConvert", 
            "definition": "AWS Elemental MediaConvert transcodes video files for streaming.", 
            "incorrect_explanations": {
                "AWS Elemental MediaLive": "AWS Elemental MediaLive is for live streaming, not transcoding.",
                "AWS Elemental MediaPackage": "AWS Elemental MediaPackage is for packaging, not transcoding.",
                "AWS Elemental MediaTailor": "AWS Elemental MediaTailor is for ad insertion, not transcoding."
            }
        },
        {
            "id": 104, "category": "Media Services", 
            "question": "A company needs to deliver live video streams. Which service should they use?", 
            "options": ["AWS Elemental MediaConvert", "AWS Elemental MediaLive", "AWS Elemental MediaPackage", "AWS Elemental MediaTailor"], 
            "answer": "AWS Elemental MediaLive", 
            "definition": "AWS Elemental MediaLive delivers live video streams.", 
            "incorrect_explanations": {
                "AWS Elemental MediaConvert": "AWS Elemental MediaConvert is for transcoding, not live streaming.",
                "AWS Elemental MediaPackage": "AWS Elemental MediaPackage is for packaging, not live streaming.",
                "AWS Elemental MediaTailor": "AWS Elemental MediaTailor is for ad insertion, not live streaming."
            }
        },
        {
            "id": 105, "category": "Media Services", 
            "question": "You need to package video content for multi-device delivery. Which service is best?", 
            "options": ["AWS Elemental MediaConvert", "AWS Elemental MediaLive", "AWS Elemental MediaPackage", "AWS Elemental MediaTailor"], 
            "answer": "AWS Elemental MediaPackage", 
            "definition": "AWS Elemental MediaPackage packages video content for multi-device delivery.", 
            "incorrect_explanations": {
                "AWS Elemental MediaConvert": "AWS Elemental MediaConvert is for transcoding, not packaging.",
                "AWS Elemental MediaLive": "AWS Elemental MediaLive is for live streaming, not packaging.",
                "AWS Elemental MediaTailor": "AWS Elemental MediaTailor is for ad insertion, not packaging."
            }
        },
        {
            "id": 106, "category": "Media Services", 
            "question": "A streaming service needs to insert personalized ads into videos. Which service should they use?", 
            "options": ["AWS Elemental MediaConvert", "AWS Elemental MediaLive", "AWS Elemental MediaPackage", "AWS Elemental MediaTailor"], 
            "answer": "AWS Elemental MediaTailor", 
            "definition": "AWS Elemental MediaTailor inserts personalized ads into video streams.", 
            "incorrect_explanations": {
                "AWS Elemental MediaConvert": "AWS Elemental MediaConvert is for transcoding, not ad insertion.",
                "AWS Elemental MediaLive": "AWS Elemental MediaLive is for live streaming, not ad insertion.",
                "AWS Elemental MediaPackage": "AWS Elemental MediaPackage is for packaging, not ad insertion."
            }
        },
        {
            "id": 107, "category": "Migration and Transfer", 
            "question": "You need to migrate petabytes of data to AWS. Which service is best?", 
            "options": ["AWS DataSync", "AWS Snowball", "AWS Snowcone", "AWS Transfer Family"], 
            "answer": "AWS Snowball", 
            "definition": "AWS Snowball is designed for transferring petabytes of data to AWS.", 
            "incorrect_explanations": {
                "AWS DataSync": "AWS DataSync is for smaller-scale data transfers, not petabytes.",
                "AWS Snowcone": "AWS Snowcone is for smaller datasets, not petabytes.",
                "AWS Transfer Family": "AWS Transfer Family is for file transfers, not large-scale migration."
            }
        },
        {
            "id": 108, "category": "Migration and Transfer", 
            "question": "A company needs to sync on-premises data with AWS storage. Which service should they use?", 
            "options": ["AWS Snowball", "AWS DataSync", "AWS Snowcone", "AWS Transfer Family"], 
            "answer": "AWS DataSync", 
            "definition": "AWS DataSync automates and accelerates data syncing between on-premises and AWS.", 
            "incorrect_explanations": {
                "AWS Snowball": "AWS Snowball is for large-scale migration, not syncing.",
                "AWS Snowcone": "AWS Snowcone is for small-scale transfers, not syncing.",
                "AWS Transfer Family": "AWS Transfer Family is for file transfers, not general syncing."
            }
        },
        {
            "id": 109, "category": "Migration and Transfer", 
            "question": "You need to transfer small amounts of data in rugged environments. Which service is best?", 
            "options": ["AWS Snowball", "AWS DataSync", "AWS Snowcone", "AWS Transfer Family"], 
            "answer": "AWS Snowcone", 
            "definition": "AWS Snowcone is a small, rugged device for transferring data in challenging environments.", 
            "incorrect_explanations": {
                "AWS Snowball": "AWS Snowball is for large-scale transfers, not small or rugged use cases.",
                "AWS DataSync": "AWS DataSync is for online syncing, not rugged environments.",
                "AWS Transfer Family": "AWS Transfer Family is for file transfers, not rugged environments."
            }
        },
        {
            "id": 110, "category": "Migration and Transfer", 
            "question": "A company needs to transfer files to AWS using SFTP. Which service should they use?", 
            "options": ["AWS Snowball", "AWS DataSync", "AWS Snowcone", "AWS Transfer Family"], 
            "answer": "AWS Transfer Family", 
            "definition": "AWS Transfer Family supports file transfers to AWS using SFTP, FTP, and FTPS.", 
            "incorrect_explanations": {
                "AWS Snowball": "AWS Snowball is for physical data migration, not SFTP.",
                "AWS DataSync": "AWS DataSync is for data syncing, not SFTP transfers.",
                "AWS Snowcone": "AWS Snowcone is for small-scale transfers, not SFTP."
            }
        },
        {
            "id": 111, "category": "Networking and Content Delivery", 
            "question": "You need to accelerate content delivery globally. Which service is best?", 
            "options": ["Amazon API Gateway", "Amazon CloudFront", "Amazon Route 53", "AWS Transit Gateway"], 
            "answer": "Amazon CloudFront", 
            "definition": "Amazon CloudFront is a CDN for accelerating global content delivery.", 
            "incorrect_explanations": {
                "Amazon API Gateway": "Amazon API Gateway is for APIs, not content delivery.",
                "Amazon Route 53": "Amazon Route 53 is for DNS, not content acceleration.",
                "AWS Transit Gateway": "AWS Transit Gateway is for network routing, not content delivery."
            }
        },
        {
            "id": 112, "category": "Networking and Content Delivery", 
            "question": "A company needs to manage APIs at scale. Which service should they use?", 
            "options": ["Amazon CloudFront", "Amazon API Gateway", "Amazon Route 53", "AWS Transit Gateway"], 
            "answer": "Amazon API Gateway", 
            "definition": "Amazon API Gateway manages and scales APIs for applications.", 
            "incorrect_explanations": {
                "Amazon CloudFront": "Amazon CloudFront is for content delivery, not APIs.",
                "Amazon Route 53": "Amazon Route 53 is for DNS, not API management.",
                "AWS Transit Gateway": "AWS Transit Gateway is for network routing, not APIs."
            }
        },
        {
            "id": 113, "category": "Networking and Content Delivery", 
            "question": "You need a DNS service for domain management. Which service is best?", 
            "options": ["Amazon CloudFront", "Amazon API Gateway", "Amazon Route 53", "AWS Transit Gateway"], 
            "answer": "Amazon Route 53", 
            "definition": "Amazon Route 53 is a scalable DNS service for domain management.", 
            "incorrect_explanations": {
                "Amazon CloudFront": "Amazon CloudFront is for content delivery, not DNS.",
                "Amazon API Gateway": "Amazon API Gateway is for APIs, not DNS.",
                "AWS Transit Gateway": "AWS Transit Gateway is for network routing, not DNS."
            }
        },
        {
            "id": 114, "category": "Networking and Content Delivery", 
            "question": "A company needs to connect multiple VPCs and on-premises networks. Which service should they use?", 
            "options": ["Amazon CloudFront", "Amazon API Gateway", "Amazon Route 53", "AWS Transit Gateway"], 
            "answer": "AWS Transit Gateway", 
            "definition": "AWS Transit Gateway connects multiple VPCs and on-premises networks.", 
            "incorrect_explanations": {
                "Amazon CloudFront": "Amazon CloudFront is for content delivery, not network connectivity.",
                "Amazon API Gateway": "Amazon API Gateway is for APIs, not network connectivity.",
                "Amazon Route 53": "Amazon Route 53 is for DNS, not network connectivity."
            }
        },
        {
            "id": 115, "category": "Security, Identity, and Compliance", 
            "question": "You need to manage user authentication and authorization for an application. Which service is best?", 
            "options": ["AWS IAM", "Amazon Cognito", "AWS Secrets Manager", "AWS Shield"], 
            "answer": "Amazon Cognito", 
            "definition": "Amazon Cognito manages user authentication and authorization for applications.", 
            "incorrect_explanations": {
                "AWS IAM": "AWS IAM is for AWS resource access, not application users.",
                "AWS Secrets Manager": "AWS Secrets Manager is for secret storage, not authentication.",
                "AWS Shield": "AWS Shield is for DDoS protection, not authentication."
            }
        },
        {
            "id": 116, "category": "Security, Identity, and Compliance", 
            "question": "A company needs to manage access to AWS resources. Which service should they use?", 
            "options": ["Amazon Cognito", "AWS IAM", "AWS Secrets Manager", "AWS Shield"], 
            "answer": "AWS IAM", 
            "definition": "AWS IAM manages access to AWS resources and services.", 
            "incorrect_explanations": {
                "Amazon Cognito": "Amazon Cognito is for application users, not AWS resources.",
                "AWS Secrets Manager": "AWS Secrets Manager is for secret storage, not access management.",
                "AWS Shield": "AWS Shield is for DDoS protection, not access management."
            }
        },
        {
            "id": 117, "category": "Security, Identity, and Compliance", 
            "question": "You need to securely store and rotate database credentials. Which service is best?", 
            "options": ["AWS IAM", "Amazon Cognito", "AWS Secrets Manager", "AWS Shield"], 
            "answer": "AWS Secrets Manager", 
            "definition": "AWS Secrets Manager securely stores and rotates sensitive data like database credentials.", 
            "incorrect_explanations": {
                "AWS IAM": "AWS IAM is for access management, not secret storage.",
                "Amazon Cognito": "Amazon Cognito is for authentication, not secret management.",
                "AWS Shield": "AWS Shield is for DDoS protection, not secret storage."
            }
        },
        {
            "id": 118, "category": "Security, Identity, and Compliance", 
            "question": "A website needs protection from DDoS attacks. Which service should you use?", 
            "options": ["AWS IAM", "Amazon Cognito", "AWS Secrets Manager", "AWS Shield"], 
            "answer": "AWS Shield", 
            "definition": "AWS Shield provides protection against DDoS attacks for AWS resources.", 
            "incorrect_explanations": {
                "AWS IAM": "AWS IAM is for access management, not DDoS protection.",
                "Amazon Cognito": "Amazon Cognito is for authentication, not DDoS protection.",
                "AWS Secrets Manager": "AWS Secrets Manager is for secret storage, not DDoS protection."
            }
        },
        {
            "id": 119, "category": "Compute", 
            "question": "You need a serverless compute service for event-driven applications. Which service is best?", 
            "options": ["Amazon EC2", "AWS Lambda", "AWS Elastic Beanstalk", "Amazon Lightsail"], 
            "answer": "AWS Lambda", 
            "definition": "AWS Lambda is a serverless compute service for event-driven applications.", 
            "incorrect_explanations": {
                "Amazon EC2": "Amazon EC2 requires server management, not serverless.",
                "AWS Elastic Beanstalk": "AWS Elastic Beanstalk is for web apps, not event-driven serverless.",
                "Amazon Lightsail": "Amazon Lightsail is for simple servers, not serverless."
            }
        },
        {
            "id": 120, "category": "Containers", 
            "question": "You need to run containers without managing servers. Which service is best?", 
            "options": ["Amazon ECS", "Amazon EKS", "AWS Fargate", "Amazon ECR"], 
            "answer": "AWS Fargate", 
            "definition": "AWS Fargate is a serverless compute engine for running containers.", 
            "incorrect_explanations": {
                "Amazon ECS": "Amazon ECS requires server management for non-Fargate tasks.",
                "Amazon EKS": "Amazon EKS requires server management for non-Fargate workloads.",
                "Amazon ECR": "Amazon ECR is for container image storage, not running containers."
            }
        },
        {
            "id": 121, "category": "Database", 
            "question": "You need a ledger database for immutable records. Which service is best?", 
            "options": ["Amazon RDS", "Amazon DynamoDB", "Amazon QLDB", "Amazon Aurora"], 
            "answer": "Amazon QLDB", 
            "definition": "Amazon QLDB is a ledger database for immutable and cryptographically verifiable records.", 
            "incorrect_explanations": {
                "Amazon RDS": "Amazon RDS is for relational databases, not ledgers.",
                "Amazon DynamoDB": "Amazon DynamoDB is for NoSQL, not immutable ledgers.",
                "Amazon Aurora": "Amazon Aurora is for relational databases, not ledgers."
            }
        },
        {
            "id": 122, "category": "Analytics", 
            "question": "You need to analyze streaming data with SQL queries in real time. Which service is best?", 
            "options": ["Amazon Redshift", "Amazon Kinesis Data Analytics", "AWS Glue", "Amazon Athena"], 
            "answer": "Amazon Kinesis Data Analytics", 
            "definition": "Amazon Kinesis Data Analytics enables real-time SQL queries on streaming data.", 
            "incorrect_explanations": {
                "Amazon Redshift": "Amazon Redshift is for data warehousing, not real-time streaming.",
                "AWS Glue": "AWS Glue is for ETL, not real-time analytics.",
                "Amazon Athena": "Amazon Athena is for querying S3, not streaming data."
            }
        },
        {
            "id": 123, "category": "Application Integration", 
            "question": "You need to integrate real-time data updates into a mobile app. Which service is best?", 
            "options": ["Amazon SNS", "Amazon SQS", "AWS AppSync", "Amazon MQ"], 
            "answer": "AWS AppSync", 
            "definition": "AWS AppSync provides real-time data updates for mobile apps via GraphQL.", 
            "incorrect_explanations": {
                "Amazon SNS": "Amazon SNS is for notifications, not real-time data syncing.",
                "Amazon SQS": "Amazon SQS is for queuing, not real-time updates.",
                "Amazon MQ": "Amazon MQ is for message brokering, not mobile app data syncing."
            }
        },
        {
            "id": 124, "category": "Management and Governance", 
            "question": "You need to monitor application performance across AWS services. Which service is best?", 
            "options": ["AWS CloudTrail", "AWS CloudWatch", "AWS Config", "AWS Trusted Advisor"], 
            "answer": "AWS CloudWatch", 
            "definition": "AWS CloudWatch monitors application performance and metrics across AWS services.", 
            "incorrect_explanations": {
                "AWS CloudTrail": "AWS CloudTrail is for auditing, not performance monitoring.",
                "AWS Config": "AWS Config is for compliance, not performance monitoring.",
                "AWS Trusted Advisor": "AWS Trusted Advisor provides recommendations, not performance monitoring."
            }
        },
        {
            "id": 125, "category": "Security, Identity, and Compliance", 
            "question": "You need to encrypt data at rest across AWS services. Which service is best?", 
            "options": ["AWS KMS", "AWS IAM", "Amazon Cognito", "AWS Shield"], 
            "answer": "AWS KMS", 
            "definition": "AWS KMS manages cryptographic keys for encrypting data at rest across AWS services.", 
            "incorrect_explanations": {
                "AWS IAM": "AWS IAM is for access management, not encryption.",
                "Amazon Cognito": "Amazon Cognito is for authentication, not encryption.",
                "AWS Shield": "AWS Shield is for DDoS protection, not encryption."
            }
        },
        {
            "id": 126, "category": "Compute", 
            "question": "You need to run high-performance computing workloads. Which service is best?", 
            "options": ["Amazon EC2", "AWS Lambda", "AWS Elastic Beanstalk", "AWS ParallelCluster"], 
            "answer": "AWS ParallelCluster", 
            "definition": "AWS ParallelCluster is designed for high-performance computing workloads.", 
            "incorrect_explanations": {
                "Amazon EC2": "Amazon EC2 supports HPC but requires manual cluster setup.",
                "AWS Lambda": "AWS Lambda is for serverless, not HPC.",
                "AWS Elastic Beanstalk": "AWS Elastic Beanstalk is for web apps, not HPC."
            }
        },
        {
            "id": 127, "category": "Storage", 
            "question": "You need to archive data with infrequent access at low cost. Which service is best?", 
            "options": ["Amazon S3", "Amazon EBS", "Amazon EFS", "Amazon S3 Glacier"], 
            "answer": "Amazon S3 Glacier", 
            "definition": "Amazon S3 Glacier provides low-cost storage for infrequently accessed data.", 
            "incorrect_explanations": {
                "Amazon S3": "Amazon S3 is for frequent access, not low-cost archiving.",
                "Amazon EBS": "Amazon EBS is for block storage, not archiving.",
                "Amazon EFS": "Amazon EFS is for file storage, not archiving."
            }
        },
        {
            "id": 128, "category": "Networking and Content Delivery", 
            "question": "You need to create a private connection between your data center and AWS. Which service is best?", 
            "options": ["Amazon CloudFront", "Amazon Route 53", "AWS Direct Connect", "AWS Transit Gateway"], 
            "answer": "AWS Direct Connect", 
            "definition": "AWS Direct Connect provides a private, high-bandwidth connection between your data center and AWS.", 
            "incorrect_explanations": {
                "Amazon CloudFront": "Amazon CloudFront is for content delivery, not private connections.",
                "Amazon Route 53": "Amazon Route 53 is for DNS, not private connectivity.",
                "AWS Transit Gateway": "AWS Transit Gateway connects VPCs, not data centers directly."
            }
        }
    ];

    let selectedQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let totalQuestions = 0;
    let userAnswers = [];
    let currentReviewPage = 0;
    const questionsPerPage = 10;

    startBtn.addEventListener('click', () => {
        const count = parseInt(questionCountInput.value);
        if (isNaN(count) || count < 1 || count > 128) {
            alert('Please enter a number between 1 and 128');
            return;
        }
        totalQuestions = count;
        selectedQuestions = questions.sort(() => Math.random() - 0.5).slice(0, count);
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        startScreen.classList.add('hidden');
        quiz.classList.remove('hidden');
        scoreDisplay.textContent = `Score: ${score}/${totalQuestions}`;
        showQuestion();
    });

    function showQuestion() {
        const currentQuestion = selectedQuestions[currentQuestionIndex];
        questionNumber.textContent = `Question ${currentQuestionIndex + 1}:`;
        questionText.textContent = currentQuestion.question;
        optionsContainer.innerHTML = '';
        result.textContent = '';
        feedback.classList.add('hidden');
        submitBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');

        currentQuestion.options.forEach(option => {
            const label = document.createElement('label');
            label.className = 'block';
            label.innerHTML = `
                <input type="radio" name="option" value="${option}" class="mr-2">
                ${option}
            `;
            optionsContainer.appendChild(label);
        });

        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.textContent = currentQuestionIndex === totalQuestions - 1 ? 'Finish' : 'Next';

        const prevAnswer = userAnswers[currentQuestionIndex];
        if (prevAnswer) {
            const radioButtons = document.querySelectorAll('input[name="option"]');
            radioButtons.forEach(radio => {
                if (radio.value === prevAnswer.selected) {
                    radio.checked = true;
                    submitBtn.classList.remove('hidden');
                    nextBtn.classList.add('hidden');
                }
            });
        }

        optionsContainer.addEventListener('change', () => {
            submitBtn.classList.remove('hidden');
            nextBtn.classList.add('hidden');
        }, { once: true });
    }

    submitBtn.addEventListener('click', () => {
        const userAnswer = document.querySelector('input[name="option"]:checked');
        if (!userAnswer) {
            alert('Please select an option!');
            return;
        }

        const currentQuestion = selectedQuestions[currentQuestionIndex];
        const isCorrect = userAnswer.value === currentQuestion.answer;

        userAnswers[currentQuestionIndex] = {
            selected: userAnswer.value,
            isCorrect: isCorrect
        };

        result.textContent = isCorrect ? 'Correct!' : 'Incorrect.';
        result.classList.add(isCorrect ? 'text-green-500' : 'text-red-500');

        if (isCorrect) {
            score++;
            scoreDisplay.textContent = `Score: ${score}/${totalQuestions}`;
        } else {
            feedback.classList.remove('hidden');
            correctAnswer.textContent = `Correct Answer: ${currentQuestion.answer}`;
            definition.textContent = `Definition: ${currentQuestion.definition}`;
            incorrectExplanation.textContent = `Why Incorrect: ${currentQuestion.incorrect_explanations[userAnswer.value] || 'No specific explanation available.'}`;
        }

        submitBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    });

    nextBtn.addEventListener('click', () => {
        if (!userAnswers[currentQuestionIndex]) {
            alert('Please submit an answer!');
            return;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
            showQuestion();
        } else {
            quiz.classList.add('hidden');
            resultsScreen.classList.remove('hidden');
            showResults();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion();
        }
    });

    restartBtn.addEventListener('click', () => {
        resultsScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        questionCountInput.value = '';
        scoreDisplay.textContent = 'Score: 0/0';
    });

    reviewBtn.addEventListener('click', () => {
        resultsScreen.classList.add('hidden');
        reviewScreen.classList.remove('hidden');
        currentReviewPage = 0;
        showReview();
    });

    backToResultsBtn.addEventListener('click', () => {
        reviewScreen.classList.add('hidden');
        resultsScreen.classList.remove('hidden');
    });

    reviewPrevBtn.addEventListener('click', () => {
        if (currentReviewPage > 0) {
            currentReviewPage--;
            showReview();
        }
    });

    reviewNextBtn.addEventListener('click', () => {
        if ((currentReviewPage + 1) * questionsPerPage < totalQuestions) {
            currentReviewPage++;
            showReview();
        }
    });

    function showResults() {
        finalScore.textContent = `Your final score is ${score}/${totalQuestions} (${((score / totalQuestions) * 100).toFixed(2)}%)`;

        const categoryScores = {};
        selectedQuestions.forEach((q, index) => {
            const category = q.category;
            if (!categoryScores[category]) {
                categoryScores[category] = { correct: 0, total: 0 };
            }
            categoryScores[category].total++;
            if (userAnswers[index] && userAnswers[index].isCorrect) {
                categoryScores[category].correct++;
            }
        });

        categoryResults.innerHTML = '<h3>Category-wise Performance:</h3>';
        for (const [category, { correct, total }] of Object.entries(categoryScores)) {
            const percentage = ((correct / total) * 100).toFixed(2);
            categoryResults.innerHTML += `
                <p>${category}: ${correct}/${total} (${percentage}%)</p>
            `;
        }
    }

    function showReview() {
        reviewQuestions.innerHTML = '';
        const startIndex = currentReviewPage * questionsPerPage;
        const endIndex = Math.min(startIndex + questionsPerPage, totalQuestions);

        for (let i = startIndex; i < endIndex; i++) {
            const question = selectedQuestions[i];
            const answer = userAnswers[i];
            const questionBlock = document.createElement('div');
            questionBlock.className = 'question-block';
            questionBlock.innerHTML = `
                <p class="font-semibold">Question ${i + 1}: ${question.question}</p>
                <p>Your Answer: ${answer.selected} <span class="${answer.isCorrect ? 'correct' : 'incorrect'}">(${answer.isCorrect ? 'Correct' : 'Incorrect'})</span></p>
                ${!answer.isCorrect ? `
                    <p>Correct Answer: ${question.answer}</p>
                    <p>Definition: ${question.definition}</p>
                    <p>Why Incorrect: ${question.incorrect_explanations[answer.selected] || 'No specific explanation available.'}</p>
                ` : `
                    <p>Definition: ${question.definition}</p>
                `}
            `;
            reviewQuestions.appendChild(questionBlock);
        }

        reviewPrevBtn.disabled = currentReviewPage === 0;
        reviewNextBtn.disabled = endIndex >= totalQuestions;
    }
});