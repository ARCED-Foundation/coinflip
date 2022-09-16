# Coin flip

<table>
  <tr>
    <td> <img src="extras/Head.jpg"  </td>
    <td> <img src="extras/Tail.jpg"   </td>
    <td> <img src="extras/Result.jpg"   </td>
  </tr>
</table>

## Description

This plug in simulates a coin flip with animation and stores the randomization result. 
[pre-loaded choices](https://docs.surveycto.com/02-designing-forms/04-sample-forms/12.search-and-select.html). The table further allows for sorting for each column and also searching for across the table. [ARCED](https://arced.foundation) team added a new parameter that allows pagination in the table. 

[![Download now](extras/download-button.png)](https://github.com/ARCED-Foundation/coinflip/raw/master/coinflip.fieldplugin.zip)

## Default SurveyCTO feature support

| Feature / Property | Support |
| --- | --- |
| Supported field type(s) | `text` `select_one` `select_multiple`|
| Default values | No |
| Custom constraint message | Yes |
| Custom required message | Yes |
| Read only | No |


## How to use

1. Download the test form [extras/sample-form](https://github.com/ARCED-Foundation/coinflip/raw/master/extras/example_form/Coin%flip.xlsx) from this repo and upload it to your SurveyCTO server.
1. Download the [coinflip.fieldplugin.zip](https://github.com/ARCED-Foundation/coinflip/raw/master/coinflip.fieldplugin.zip) file from this repo, and attach it to the test form on your SurveyCTO server.
1. Make sure to provide the correct parameters (see below).

## Parameters

| **Key** | **Value** |
| --- | --- |
| `head` | Text to show and store when its head |
| `tail` | Text to show and store when its tail |


> **Example:**  
`custom-flipcoin(head="Air Filter", tail="No Air Filter")`


## Author
[Mehrab Ali](https://github.com/mehrabali)
[ARCED Foundation](https://www.arced.foundation)
Email: [mehrab.ali@arced.foundation](mailto::mehrab.ali@arced.foundation)

## More resources

* **Sample form**  
You can find a form definition in this repo here: [extras/sample_form](https://github.com/surveycto/table-list/raw/master/extras/example_form/table-list%20sample%20folder.zip).

* **Developer documentation**  
More instructions for developing and using field plug-ins can be found here: [https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)

* **User documentation**
How to get started using field plug-ins in your SurveyCTO form.
(https://docs.surveycto.com/02-designing-forms/03-advanced-topics/06.using-field-plug-ins.html)
