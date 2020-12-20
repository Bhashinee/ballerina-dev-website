var searchData = {
  "modules": [
    {
      "id": "grpc",
      "description": "\u003cp\u003eThis module provides support for the gRPC messaging protocol.\u003c/p\u003e",
      "orgName": "ballerina",
      "version": "0.7.4"
    }
  ],
  "classes": [
    {
      "id": "ConnectionManager",
      "description": "",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "Headers",
      "description": "\u003cp\u003eProvides the actions to read/write header values in a gRPC request/response message.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    }
  ],
  "functions": [],
  "records": [
    {
      "id": "RetryConfiguration",
      "description": "\u003cp\u003eRepresents grpc client retry functionality configurations.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "ClientConfiguration",
      "description": "\u003cp\u003eRepresents client endpoint configuration.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "SecureSocket",
      "description": "\u003cp\u003eProvides the configurations for facilitating secure communication with a remote HTTP endpoint.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "ServiceDescriptorData",
      "description": "\u003cp\u003eService descriptor data generated at the compile time.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "Remote",
      "description": "\u003cp\u003ePresents a read-only view of the remote address.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "Local",
      "description": "\u003cp\u003ePresents a read-only view of the local address.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "Protocols",
      "description": "\u003cp\u003eProtocols record represents SSL/TLS protocol related options to be used for HTTP client/service invocation.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "ValidateCert",
      "description": "\u003cp\u003eValidateCert record represents options related to check whether a certificate is revoked or not.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "ListenerOcspStapling",
      "description": "\u003cp\u003eOcspStapling record represents options related to check whether a certificate is revoked or not.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "PoolConfiguration",
      "description": "\u003cp\u003eConfigurations for managing the gRPC client connection pool.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "ListenerConfiguration",
      "description": "\u003cp\u003eRepresents the gRPC server endpoint configuration.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "ListenerSecureSocket",
      "description": "\u003cp\u003eConfigures the SSL/TLS options to be used for HTTP service.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    }
  ],
  "constants": [
    {
      "id": "COMPRESSION_AUTO",
      "description": "\u003cp\u003eWhen service behaves as a HTTP gateway inbound request/response accept-encoding option is set as the\noutbound request/response accept-encoding/content-encoding option.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "COMPRESSION_ALWAYS",
      "description": "\u003cp\u003eAlways set accept-encoding/content-encoding in outbound request/response.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "COMPRESSION_NEVER",
      "description": "\u003cp\u003eNever set accept-encoding/content-encoding header in outbound request/response.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "OK",
      "description": "\u003cp\u003eThe gRPC error status code: 0 OK.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "CANCELED",
      "description": "\u003cp\u003eThe gRPC error status code: 1 Canceled.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "UNKNOWN",
      "description": "\u003cp\u003eThe gRPC error status code: 2 Unknown.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "INVALID_ARGUMENT",
      "description": "\u003cp\u003eThe gRPC error status code: 3 Invalid Argument.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "DEADLINE_EXCEEDED",
      "description": "\u003cp\u003eThe gRPC error status code: 4 Deadline Exceeded.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "NOT_FOUND",
      "description": "\u003cp\u003eThe gRPC error status code: 5 Not Found.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "ALREADY_EXISTS",
      "description": "\u003cp\u003eThe gRPC error status code: 6 Already Exists.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "PERMISSION_DENIED",
      "description": "\u003cp\u003eThe gRPC error status code: 7 Permission Denied.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "RESOURCE_EXHAUSTED",
      "description": "\u003cp\u003eThe gRPC error status code: 8 Resource Exhausted.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "FAILED_PRECONDITION",
      "description": "\u003cp\u003eThe gRPC error status code: 9 Failed Precondition.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "ABORTED",
      "description": "\u003cp\u003eThe gRPC error status code: 10 Aborted.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "OUT_OF_RANGE",
      "description": "\u003cp\u003eThe gRPC error status code: 11 Out of Range.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "UNIMPLEMENTED",
      "description": "\u003cp\u003eThe gRPC error status code: 12 Unimplemented.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "INTERNAL",
      "description": "\u003cp\u003eThe gRPC error status code: 13 Internal.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "UNAVAILABLE",
      "description": "\u003cp\u003eThe gRPC error status code: 14 Unavailable.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "DATA_LOSS",
      "description": "\u003cp\u003eThe gRPC error status code: 15 Data Loss.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "UNAUTHENTICATED",
      "description": "\u003cp\u003eThe gRPC error status code: 16 Unauthenticated.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    }
  ],
  "errors": [
    {
      "id": "CancelledError",
      "description": "\u003cp\u003eRepresents the operation canceled(typically by the caller) error.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "UnKnownError",
      "description": "\u003cp\u003eRepresents unknown error.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "InvalidArgumentError",
      "description": "\u003cp\u003eRepresents client specified an invalid argument error.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "DeadlineExceededError",
      "description": "\u003cp\u003eRepresents operation expired before completion error.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "NotFoundError",
      "description": "\u003cp\u003eRepresents requested entity (e.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "AlreadyExistsError",
      "description": "\u003cp\u003eRepresents error occur when attempt to create an entity which already exists.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "PermissionDeniedError",
      "description": "\u003cp\u003eRepresents error occur when the caller does not have permission to execute the specified operation.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "UnauthenticatedError",
      "description": "\u003cp\u003eRepresents error occur when the request does not have valid authentication credentials for the operation.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "ResourceExhaustedError",
      "description": "\u003cp\u003eRepresents error occur when the resource is exhausted.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "FailedPreconditionError",
      "description": "\u003cp\u003eRepresents error occur when operation is rejected because the system is not in a state required for the operation\u0027s execution.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "AbortedError",
      "description": "\u003cp\u003eRepresents error occur when operation is aborted.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "OutOfRangeError",
      "description": "\u003cp\u003eRepresents error occur when specified value is out of range.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "UnimplementedError",
      "description": "\u003cp\u003eRepresents error occur when operation is not implemented or not supported/enabled in this service.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "InternalError",
      "description": "\u003cp\u003eRepresents internal error.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "UnavailableError",
      "description": "\u003cp\u003eRepresents error occur when the service is currently unavailable.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "DataLossError",
      "description": "\u003cp\u003eRepresents unrecoverable data loss or corruption erros.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "AllRetryAttemptsFailed",
      "description": "\u003cp\u003eRepresents error scenario where the maximum retry attempts are done and still received an error.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "StreamClosedError",
      "description": "\u003cp\u003eRepresents an error when calling next when the stream has closed.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "EOS",
      "description": "\u003cp\u003eRepresents an error when reaching the end of the client stream.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    }
  ],
  "types": [
    {
      "id": "Compression",
      "description": "\u003cp\u003eOptions to compress using gzip or deflate.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "ResiliencyError",
      "description": "\u003cp\u003eRepresents all the resiliency-related errors.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "Error",
      "description": "\u003cp\u003eRepresents gRPC related errors.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    }
  ],
  "clients": [
    {
      "id": "Client",
      "description": "\u003cp\u003eThe gRPC client endpoint provides the capability for initiating contact with a remote gRPC service.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "Caller",
      "description": "\u003cp\u003eProvides the gRPC remote functions for interacting with caller.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "StreamingClient",
      "description": "\u003cp\u003eProvides the gRPC streaming client actions for interacting with the gRPC server.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    }
  ],
  "listeners": [
    {
      "id": "Listener",
      "description": "\u003cp\u003eRepresents server listener where one or more services can be registered.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    }
  ],
  "annotations": [
    {
      "id": "ServiceDescriptor",
      "description": "\u003cp\u003eService descriptor annotation.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    }
  ],
  "abstractObjects": [
    {
      "id": "AbstractClientEndpoint",
      "description": "\u003cp\u003eRepresents the abstract gRPC client endpoint.\u003c/p\u003e",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    },
    {
      "id": "Service",
      "description": "\u003cp\u003eThe gRPC service type\u003c/p\u003e\n",
      "moduleId": "grpc",
      "moduleOrgName": "ballerina",
      "moduleVersion": "0.7.4"
    }
  ]
};