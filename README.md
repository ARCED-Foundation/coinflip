# Coin flip

<center>
<video height="500" controls>
  <source src="https://github.com/ARCED-Foundation/coinflip/raw/master/extras/demo.mp4" type="video/mp4">
</video>
</center>



## Description

This plug in simulates a coin flip with animation and stores the randomization result. 

[![Download now](extras/download-button.png)](https://github.com/ARCED-Foundation/coinflip/raw/master/coinflip.fieldplugin.zip)

## Default SurveyCTO feature support

| Feature / Property | Support |
| --- | --- |
| Supported field type(s) | `text` |
| Default values | No |
| media:image | Yes|
| media:audio | Yes |
| media:video | Yes |
| Custom required message | Yes |
| Read only | No |


## How to use

1. Download the test form [extras/sample-form](https://github.com/ARCED-Foundation/coinflip/raw/master/extras/example_form/Coin_flip.xlsx) from this repo and upload it to your SurveyCTO server.
2. Download the [coinflip.fieldplugin.zip](https://github.com/ARCED-Foundation/coinflip/raw/master/coinflip.fieldplugin.zip) file from this repo, and attach it to the test form on your SurveyCTO server.
3. Make sure to provide the correct parameters (see below).

## Parameters

| **Key** | **Value** |
| --- | --- |
| `head` | Text to show and store when its head |
| `tail` | Text to show and store when its tail |


> **Example:**  
`custom-flipcoin(head="Air Filter", tail="No Air Filter")`


## Author
[Mehrab Ali](https://github.com/mehrabali) <br>
[ARCED Foundation](https://www.arced.foundation)<br>
Email: [mehrab.ali@arced.foundation](mailto::mehrab.ali@arced.foundation)

## More resources

* **Sample form**  
You can find a form definition in this repo here: [extras/sample_form](https://github.com/ARCED-Foundation/coinflip/raw/master/extras/example_form/Coin_flip.xlsx).

* **Developer documentation**  
More instructions for developing and using field plug-ins can be found here: [https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)

* **User documentation**
How to get started using field plug-ins in your SurveyCTO form.
(https://docs.surveycto.com/02-designing-forms/03-advanced-topics/06.using-field-plug-ins.html)
