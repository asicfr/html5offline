<%-- Detail screen for Book entity      --%>
<%-- Created on 17 déc. 2012 ( Time 15:39:59 )  --%>



<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<%@ taglib prefix="s" uri="/struts-tags"%>
<html lang="en">
<head>
<meta charset="utf-8">
<title>BookStore</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Book">
<meta name="author" content="asic">

<!-- Le styles -->
<link href="<s:url value='/static/css/bootstrap.min.css' includeParams='none'/>" rel="stylesheet" />
<style>
body {
	padding-top: 60px;
	/* 60px to make the container go all the way to the bottom of the topbar */
}
</style>
<link href="<s:url value='/static/css/bootstrap-responsive.min.css' includeParams='none'/>" rel="stylesheet" />
<link href="<s:url value='/static/css/styles.css' includeParams='none'/>" rel="stylesheet" />
</head>

  <body>

    <div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="#">Book</a>
          <input type="button" class="btn btn-info" value="All" 	 onclick="directGet('search')" />
          <input type="button" class="btn btn-info" value="Back to Welcome Page" 	 onclick="goHome()" />
        </div>
      </div>
    </div>

    <div class="container">
      
		<s:form name="bookForm" action="book" cssClass="well">  
		
	
				<s:textfield name="current.id" 
				label="id" />
		
				<s:textfield name="current.publisherId" 
				label="publisherId" />
		
				<s:textfield name="current.authorId" 
				label="authorId" />
		
				<s:textfield name="current.isbn" 
				label="isbn" />
		
				<s:textfield name="current.title" 
				label="title" />
		
				<s:textfield key="current.price" 
				value="%{getText('my.format.number',{current.price})}" 
				label="price"/>
		
				<s:textfield name="current.quantity" 
				label="quantity" />
		
				<s:textfield name="current.discount" 
				label="discount" />
		
				<s:textfield name="current.availability" 
				label="availability" />
		
				<s:textfield name="current.bestSeller" 
				label="bestSeller" />
				
			<tr>
			<td colspan="2">
				<s:actionmessage/>
				<s:actionerror/>
				<s:fielderror/>
			</td>
			</tr>
			
			<tr>
			<td colspan="2">
			 	<input type="button" class="btn btn-info" value="Save"   onclick="changeActionAndsubmit('save')"   />
			 	
			 	<input type="button" class="btn btn-info" value="Delete" onclick="directDelete('<s:property value="#attr.current.id" />')" />
			 	
			 	<input type="button" class="btn btn-info" value="Clear"  onclick="directGet('clear')"  />
			 	<input type="button" class="btn btn-info" value="Search" onclick="changeActionAndsubmit('search')" />
			 	<input type="button" class="btn btn-info" value="All" 	 onclick="directGet('search')" />
			</td>
			</tr>
			 
		</s:form>	
		      

    </div> <!-- /container -->


    <script src="<s:url value='/static/javascript/jquery.js' includeParams='none'/>"></script>
    <script src="<s:url value='/static/javascript/bootstrap.min.js' includeParams='none'/>"></script>
	<script src="<s:url value='/static/javascript/validation.js' includeParams='none'/>"></script>
	
	<script type="text/javascript">
		
		var urlBaseWelcome = '<s:url value="/" />';
		var urlBase = '<s:url action="book" includeParams="none" />';
		
		function changeActionAndsubmit(url) {
			document.bookForm.action = urlBase + '/' + url;
		    document.bookForm.submit();
		}

		function directDelete(idbook) {
			document.location = urlBase + '/delete/' + idbook ;
		}
		
		function directGet(url) {
			document.location = urlBase + '/' + url;
		}
		
		function goHome() {
			document.location = urlBaseWelcome;
		}
		
	</script>

  </body>
</html>
