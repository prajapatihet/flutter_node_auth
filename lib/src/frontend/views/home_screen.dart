import 'package:flutter/material.dart';
import 'package:flutter_node_auth/src/backend/provider/user_provider.dart';
import 'package:provider/provider.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final user = Provider.of<UserProvider>(context).user;
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(user.id),
          Text(user.email),
          Text(user.name),
        ],
      ),
    );
  }
}
