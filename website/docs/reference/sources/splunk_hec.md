---
last_modified_on: "2020-04-15"
delivery_guarantee: "at_least_once"
component_title: "Splunk HEC"
description: "The Qovery `splunk_hec` source ingests data through the Splunk HTTP Event Collector protocol and outputs `log` events."
event_types: ["log"]
function_category: "receive"
issues_url: https://github.com/qovery/documentation/issues?q=is%3Aopen+is%3Aissue+label%3A%22source%3A+splunk_hec%22
operating_systems: ["Linux","MacOS","Windows"]
sidebar_label: "splunk_hec|[\"log\"]"
source_url: https://github.com/qovery/documentation/tree/master/src/sources/splunk_hec.rs
status: "beta"
title: "Splunk HEC Source"
unsupported_operating_systems: []
---

import Alert from '@site/src/components/Alert';
import Fields from '@site/src/components/Fields';
import Field from '@site/src/components/Field';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Qovery `splunk_hec` source
ingests data through the [Splunk HTTP Event Collector
protocol][urls.splunk_hec_protocol] and outputs [`log`][docs.data-model.log]
events.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/reference/sources/splunk_hec.md.erb
-->

## Requirements

<Alert icon={false} type="danger" classNames="list--warnings">

* This component exposes a configured port. You must ensure your network allows access to this port.

</Alert>

## Configuration

<Tabs
  block={true}
  defaultValue="common"
  values={[{"label":"Common","value":"common"},{"label":"Advanced","value":"advanced"}]}>
<TabItem value="common">

```toml title="qovery.toml"
[sources.my_source_id]
  type = "splunk_hec" # required
  address = "0.0.0.0:80" # optional, default
  token = "A94A8FE5CCB19BA61C4C08" # optional, no default
```

</TabItem>
<TabItem value="advanced">

```toml title="qovery.toml"
[sources.my_source_id]
  # General
  type = "splunk_hec" # required
  address = "0.0.0.0:80" # optional, default
  token = "A94A8FE5CCB19BA61C4C08" # optional, no default

  # TLS
  tls.ca_path = "/path/to/certificate_authority.crt" # optional, no default
  tls.crt_path = "/path/to/host_certificate.crt" # optional, no default
  tls.enabled = false # optional, default
  tls.key_pass = "${KEY_PASS_ENV_VAR}" # optional, no default
  tls.key_path = "/path/to/host_certificate.key" # optional, no default
  tls.verify_certificate = false # optional, default
```

</TabItem>
</Tabs>

<Fields filters={true}>
<Field
  common={true}
  defaultValue={"0.0.0.0:80"}
  enumValues={null}
  examples={["0.0.0.0:80"]}
  groups={[]}
  name={"address"}
  path={null}
  relevantWhen={null}
  required={false}
  templateable={false}
  type={"string"}
  unit={null}
  warnings={[]}
  >

### address

The address to accept connections on.




</Field>
<Field
  common={true}
  defaultValue={null}
  enumValues={null}
  examples={["A94A8FE5CCB19BA61C4C08"]}
  groups={[]}
  name={"token"}
  path={null}
  relevantWhen={null}
  required={false}
  templateable={false}
  type={"string"}
  unit={null}
  warnings={[]}
  >

### token

If supplied, incoming requests must supply this token in the `Authorization`
header, just as a client would if it was communicating with the Splunk HEC
endpoint directly. If _not_ supplied, the `Authorization` header will be
ignored and requests will not be authenticated.




</Field>
<Field
  common={false}
  defaultValue={null}
  enumValues={null}
  examples={[]}
  groups={[]}
  name={"tls"}
  path={null}
  relevantWhen={null}
  required={false}
  templateable={false}
  type={"table"}
  unit={null}
  warnings={[]}
  >

### tls

Configures the TLS options for connections from this source.



<Fields filters={false}>
<Field
  common={false}
  defaultValue={null}
  enumValues={null}
  examples={["/path/to/certificate_authority.crt"]}
  groups={[]}
  name={"ca_path"}
  path={"tls"}
  relevantWhen={null}
  required={false}
  templateable={false}
  type={"string"}
  unit={null}
  warnings={[]}
  >

#### ca_path

Absolute path to an additional CA certificate file, in DER or PEM format
(X.509).




</Field>
<Field
  common={true}
  defaultValue={null}
  enumValues={null}
  examples={["/path/to/host_certificate.crt"]}
  groups={[]}
  name={"crt_path"}
  path={"tls"}
  relevantWhen={null}
  required={false}
  templateable={false}
  type={"string"}
  unit={null}
  warnings={[]}
  >

#### crt_path

Absolute path to a certificate file used to identify this server, in DER or PEM
format (X.509) or PKCS#12. If this is set and is not a PKCS#12 archive,
`key_path` must also be set. This is required if [`enabled`](#enabled) is set to `true`.




</Field>
<Field
  common={true}
  defaultValue={false}
  enumValues={null}
  examples={[false,true]}
  groups={[]}
  name={"enabled"}
  path={"tls"}
  relevantWhen={null}
  required={false}
  templateable={false}
  type={"bool"}
  unit={null}
  warnings={[]}
  >

#### enabled

Require TLS for incoming connections. If this is set, an identity certificate
is also required.




</Field>
<Field
  common={true}
  defaultValue={null}
  enumValues={null}
  examples={["${KEY_PASS_ENV_VAR}","PassWord1"]}
  groups={[]}
  name={"key_pass"}
  path={"tls"}
  relevantWhen={null}
  required={false}
  templateable={false}
  type={"string"}
  unit={null}
  warnings={[]}
  >

#### key_pass

Pass phrase used to unlock the encrypted key file. This has no effect unless
`key_path` is set.




</Field>
<Field
  common={true}
  defaultValue={null}
  enumValues={null}
  examples={["/path/to/host_certificate.key"]}
  groups={[]}
  name={"key_path"}
  path={"tls"}
  relevantWhen={null}
  required={false}
  templateable={false}
  type={"string"}
  unit={null}
  warnings={[]}
  >

#### key_path

Absolute path to a certificate key file used to identify this server, in DER or
PEM format (PKCS#8).




</Field>
<Field
  common={false}
  defaultValue={false}
  enumValues={null}
  examples={[false,true]}
  groups={[]}
  name={"verify_certificate"}
  path={"tls"}
  relevantWhen={null}
  required={false}
  templateable={false}
  type={"bool"}
  unit={null}
  warnings={[{"visibility_level":"option","text":"Setting this to `false` will cause OpenSSL to not request a certificate from the client","option_name":"verify_certificate"}]}
  >

#### verify_certificate

If `true`, Qovery will require a TLS certificate from the connecting host and
terminate the connection if it is not valid. If `false` (the default), Qovery
will not request a certificate from the client.




</Field>
</Fields>

</Field>
</Fields>

## Fields

```javascript title="example log event"
{
  // ...
  "message": "Started GET / for 127.0.0.1 at 2012-03-10 14:28:14 +0100",
  "splunk_channel": "2019-11-01T21:15:47+00:00",
  "timestamp": "2019-11-01T21:15:47+00:00"
  // ...
}
```

<Fields filters={true}>
<Field
  common={true}
  defaultValue={null}
  enumValues={null}
  examples={["Started GET / for 127.0.0.1 at 2012-03-10 14:28:14 +0100"]}
  groups={[]}
  name={"message"}
  path={null}
  relevantWhen={null}
  required={true}
  templateable={false}
  type={"string"}
  unit={null}
  warnings={[]}
  >

### message

The raw log message, unaltered.




</Field>
<Field
  common={true}
  defaultValue={null}
  enumValues={null}
  examples={["2019-11-01T21:15:47+00:00"]}
  groups={[]}
  name={"splunk_channel"}
  path={null}
  relevantWhen={null}
  required={true}
  templateable={false}
  type={"timestamp"}
  unit={null}
  warnings={[]}
  >

### splunk_channel

The Splunk channel, value of the `X-Splunk-Request-Channel` header.




</Field>
<Field
  common={true}
  defaultValue={null}
  enumValues={null}
  examples={["2019-11-01T21:15:47+00:00"]}
  groups={[]}
  name={"timestamp"}
  path={null}
  relevantWhen={null}
  required={true}
  templateable={false}
  type={"timestamp"}
  unit={null}
  warnings={[]}
  >

### timestamp

If the [Splunk HEC event endpoint][urls.splunk_hec_event_endpoint] is used then
the value of the [`time`](#time) field will be used. If the [Splunk HEC raw
endpoint][urls.splunk_hec_raw_endpoint] is used, then the current time the
event was received will be used.




</Field>
</Fields>

## Examples

Given the following input:

```text title="Example input"
Hello world
```

A log event will be output with the following structure:

```json title="Example log event"
{
  "timestamp": <2019-07-26T20:30:27.000443Z>, // time event was received,
  "host": "my.host.com", // value of the `Host` header
  "splunk_channel": "FE0ECFAD-13D5-401B-847D-77833BD77131" // value of the `X-Splunk-Request-Channel` header

}
```

## How It Works

### Environment Variables

Environment variables are supported through all of Qovery's configuration.
Simply add `${MY_ENV_VAR}` in your Qovery configuration file and the variable
will be replaced before being evaluated.

You can learn more in the
[Environment Variables][docs.configuration#environment-variables] section.

### TLS

Qovery uses [Openssl][urls.openssl] for TLS protocols for it's battle-tested
and reliable security. You can enable and adjust TLS behavior via the [`tls.*`](#tls)
options.


[docs.configuration#environment-variables]: /docs/setup/configuration/#environment-variables
[docs.data-model.log]: /docs/about/data-model/log/
[urls.openssl]: https://www.openssl.org/
[urls.splunk_hec_event_endpoint]: https://docs.splunk.com/Documentation/Splunk/8.0.0/RESTREF/RESTinput#services.2Fcollector.2Fevent
[urls.splunk_hec_protocol]: https://docs.splunk.com/Documentation/Splunk/8.0.0/Data/HECRESTendpoints
[urls.splunk_hec_raw_endpoint]: https://docs.splunk.com/Documentation/Splunk/8.0.0/RESTREF/RESTinput#services.2Fcollector.2Fraw